import { motion } from 'framer-motion';
import Image from 'next/image';

const Profile = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative inline-block"
        >
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-3xl rotate-6 opacity-50" />
                <div className="absolute inset-[2px] bg-background rounded-3xl rotate-6" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                        src="/images/profile/profile.jpg"
                        alt="Profile"
                        fill
                        className="object-cover rounded-3xl rotate-6 p-1"
                        priority
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default Profile; 