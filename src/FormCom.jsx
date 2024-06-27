import { useForm } from 'react-hook-form';

const FormCom = ({posts, setPosts, setOpen}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log('form submitted', data);
        setPosts([...posts , data ]);
        setOpen(false)

    };

    return (
        <div className='flex justify-center items-center h-screen '>
            <form className='flex flex-col rounded-lg gap-3 border-2xl w-fit   bg-white shadow-lg  p-10 ' onSubmit={handleSubmit(onSubmit)}>
            <h1 className='text-center text-3xl font-mono'>Add Post</h1>
                <div >
                <label htmlFor="name"> Post Name : </label>

                    <input className=' border-2 rounded-2xl   ' type="text" {...register("name", { required: "Name is required" })} />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>
                <div>
                    <label htmlFor="name"> Post Description : </label>
                    <input type="text" id='name' className=' border-2 rounded-2xl   ' {...register("description", { required: "Email is required" })} />
                    {errors.description && <p className='text-red-500'>{errors.description.message}</p>}

                </div>
                <div className=' '>
                <label htmlFor="name"> Post Link : </label>

                    <input type="text" className=' border-2 rounded-2xl   ' {...register("ImgLink", { required: "Link is required" })} />
                    {errors.ImgLink && <p className='text-red-500'>{errors.ImgLink.message}</p>}
                </div>
                <div className=' '>
                <label htmlFor="date"> Post Link : </label>

                    <input type="datetime-local" className=' border-2 rounded-2xl   ' {...register("time", { required: "time is required" })} />
                    {errors.time && <p className='text-red-500'>{errors.time.message}</p>}
                </div>
                <button type="submit " className=' bg-green-400 rounded-md p-1'>Submit</button>
            </form>
        </div>
    );
};

export default FormCom;
