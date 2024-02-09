import Image from 'next/image';
import toast from 'react-hot-toast';

export default function EditableImage({ link, setLink }) {
    const handleFileChange = async (e) => {
        const files = e?.target?.files;
        if (files?.length === 1) {
            const data = new FormData();
            data.set('file', files[0]);

            const uploadPromise = fetch('/api/upload', {
                method: 'POST',
                body: data,
            }).then((response) => {
                if (response?.ok) {
                    return response.json().then((link) => {
                        setLink(link);
                    });
                }
                throw new Error('Something went wrong');
            });
            await toast.promise(uploadPromise, {
                loading: 'Uploading...',
                success: 'Upload complete',
                error: 'Upload error',
            });
        }
    };

    return (
        <>
            {link && (
                <Image
                    className='rounded-lg w-full h-full mb-2'
                    src={link}
                    width={100}
                    height={100}
                    alt='avatar'
                />
            )}
            {!link && (
                <Image
                    className='rounded-lg mb-2'
                    src={'/no-image.png'}
                    width={200}
                    height={200}
                    alt={'no image'}
                />
            )}

            <label className='!ml-0'>
                <input
                    className='hidden'
                    type='file'
                    onChange={handleFileChange}
                />
                <span className='block border border-gray-300 rounded-lg p-1.5 text-center font-semibold text-base cursor-pointer'>
                    Edit
                </span>
            </label>
        </>
    );
}
