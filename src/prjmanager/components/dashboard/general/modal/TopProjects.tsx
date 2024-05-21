import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { RootState } from '../../../../../store/store'
import { Formik, Form } from 'formik'
import { ProjectField } from './ProjectField'
import { addTopProject } from '../../../../../store/projects/projectSlice'
import { setTopProjects } from '../../../../../store/auth/authSlice'
import { Autocomplete, TextField, Chip } from '@mui/material';
import { ImCancelCircle } from "react-icons/im";
import { ScaleLoader  } from 'react-spinners';
import axios from 'axios'
import Swal from 'sweetalert2';

interface OptionType {
    value: string;
    label: string;
  }

export const TopProjects = ({ uid, isModalOpen, setIsModalOpen }) => {

    const dispatch = useDispatch();
    const { topProjects } = useSelector((state: RootState) => state.auth);
    
    const [isLoading, setIsLoading] = useState(true)
    const [options, setOptions] = useState<OptionType[]>([]);
    const [selectedOptions, setSelectedOptions] = useState<readonly OptionType[]>([]);
    const [initialState, setinitialState] = useState([])
    const [buttonDisabled, setButtonDisabled] = useState(false)

    const handleClientSelect = (_, newValues, setFieldValue) => {
        if (newValues.length <= 3) {
          setSelectedOptions(newValues); // Actualizar el estado local para las etiquetas
          const newProjectValues = newValues.map((project) => project.value);
          setFieldValue('currentTopProjects', newProjectValues);
        } else {
          Swal.fire({
            title: 'Error',
            text: 'You can only select up to 3 projects, delete one to add another one.',
            icon: 'error',
            confirmButtonText: 'Ok',
          });
        }
    };

    const setProjectsData = (projects) => {
        const options = projects.map((project) => {
            return { value: project.pid, label: `${project.name}` };
        });
        setOptions(options);
        setIsLoading(false);
    };

    const IsTheButtonDisabled = ({ values }) => {
        // console.log('initial',initialState)
        // console.log('valores',values.currentTopProjects)
        useEffect(() => {
            // Función para comparar dos arrays
            const arraysAreEqual = (array1, array2) => {
                if (array1.length !== array2.length) return false;
                const sorted1 = [...array1].sort();
                const sorted2 = [...array2].sort();
                return sorted1.every((value, index) => value === sorted2[index]);
            };
    
            // Compara el estado actual con el estado inicial
            const isDisabled = arraysAreEqual(values.currentTopProjects, initialState);
    
            setButtonDisabled(isDisabled);
        }, [values.currentTopProjects, initialState]);
    
        return null; // Este componente no necesita renderizar nada por sí mismo
    };

    const fetchProjects = async() => {
        try {
            const res = await axios.get(`http://localhost:3000/api/projects/get-projects/${uid}`, {
                params: {
                    type: 'id_name'
                },
                headers: {
                    'Authorization': localStorage.getItem('x-token')
                }
            })
            setProjectsData(res.data);
        } catch (error) {
            console.log(error)
        }
    }

    const handleClose = () => {
        const modal = document.getElementById('topProjectsModal');
        if (modal) {
            // Inicia la transición de opacidad a 0
            modal.classList.replace('opacity-100', 'opacity-0');
  
            // Espera a que la animación termine antes de ocultar el modal completamente
            setTimeout(() => {
                setIsModalOpen(false);
            }, 500); // Asume que la duración de tu transición es de 500ms
        }
    }

    const handleSubmit = async( values, { setSubmitting, resetForm } ) => {
        setSubmitting(true);
        setIsLoading(true);
        
        try {
            const { data: { response, user } } = await axios.put(`http://localhost:3000/api/users/update-top-projects/${uid}`, values, {
                headers: {
                    'Authorization': localStorage.getItem('x-token')
                }
            })

            setSubmitting(false);
            setIsLoading(false);
            dispatch(setTopProjects(user.topProjects));

            Swal.fire({
                title: 'Success',
                text: response,
                icon: 'success',
                confirmButtonText: 'Ok',
            });
            setTimeout(() => {
                handleClose();
            }, 3000);  
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        setIsLoading(true);
        fetchProjects();
        if( topProjects.length > 0 ){
            const initialOptions = topProjects.map( (project: string) => {
                return { value: project._id, label: `${project.name}` };
            })
            setSelectedOptions(initialOptions);
            setinitialState(initialOptions)
        }
    }, [ topProjects]);

    useEffect(() => {
        if (isModalOpen) {
          // Asegúrate de que el modal existe antes de intentar acceder a él
          // Luego, después de un breve retraso, inicia la transición de opacidad
          const timer = setTimeout(() => {
            document.getElementById('topProjectsModal').classList.remove('opacity-0');
            document.getElementById('topProjectsModal').classList.add('opacity-100');
          }, 20); // Un retraso de 20ms suele ser suficiente
          return () => clearTimeout(timer);
        }
      }, [isModalOpen]);

    return (
        <div className='fixed flex w-screen h-full pb-5 top-0 right-0 justify-center items-center z-10 bg-black/30'>
            <div id='topProjectsModal' className='flex flex-col w-[70%] bg-gray-200 md:w-[600px] h-[300px] rounded-extra glassi transition-opacity duration-300 ease-in-out opacity-0'>  
                {
                    isLoading 
                    ? (
                        <div className='flex flex-grow justify-center items-center'>
                            <ScaleLoader color='#0c4a6e' loading={true} />
                        </div>
                    ) 
                    :
                    (                    
                        <Formik
                            initialValues={{ 
                                currentTopProjects: initialState
                            }}
                            onSubmit={handleSubmit}
                        > 
                            {({ values, setFieldValue, handleChange, isSubmitting }) => (
                                <Form className='flex flex-col flex-grow'>
                                    <IsTheButtonDisabled values={values} />
                                    <div className='flex justify-between w-[90%] h-12 ml-auto mr-auto mt-2 py-2 px-1 border-b-2 border-b-gray-500'>
                                        <p className='text-xl text-black'>Top Projects</p>
                                        <button type='button' onClick={handleClose}>
                                            <ImCancelCircle/>
                                        </button>                   
                                    </div>

                                    <p className="w-[90%] pl-8 mt-4 text-md text-sky-950">
                                        Top projects will be tracked in the TreeChart of the dashboard, you can choose up to 3 projects.
                                    </p>
                                    <div className="flex flex-col space-y-7 w-[90%]  ml-auto mr-auto my-5">
                                        <div>
                                            <Autocomplete
                                                multiple
                                                id="tags-outlined"
                                                options={options}
                                                value={selectedOptions}  // Utilizar el estado local para el valor
                                                isOptionEqualToValue={(option, value) => option.value === value.value}
                                                onChange={(_, newValues) => handleClientSelect(_, newValues, setFieldValue)}
                                                renderInput={(params) => (  
                                                <TextField {...params}  label="projects" />
                                                )}
                                                renderTags={ (value, getTagProps) => {
                                                    return value.map((option, index) => (
                                                        <Chip               
                                                            label={option.label.length > 10 ? `${option.label.substring(0, 10)}...` : option.label}
                                                            {...getTagProps({ index })}
                                                        />
                                                    ));
                                                }}
                                            />
                                        </div>
                                        <div className='flex w-full justify-center items-end '>                                     
                                            <button 
                                                type="submit"
                                                disabled={ buttonDisabled || isSubmitting }
                                                className={`w-[95%] h-[50px] rounded-extra ${buttonDisabled ? 'backdrop-blur-sm' : 'backdrop-blur-sm bg-green-400/20 shadow-sm'} border-[1px] border-gray-400 transition-colors duration-300 ease-in-out transform active:translate-y-[2px]`}
                                            >
                                                Save Changes
                                            </button>                                   
                                        </div>
                                    </div>                                                                                      
                                </Form>
                            )}           
                        </Formik>
                    ) }   
            </div>
        </div>
    )
}
