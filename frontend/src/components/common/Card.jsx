import { cn } from '../../utils/cn';
import { motion } from 'framer-motion';

export const Card = ({ children, className, hover = true, ...props }) => {
  return (
    <motion.div
      whileHover={hover ? { y: -5 } : {}}
      className={cn(
        "glass-card rounded-xl p-6 transition-colors duration-300",
        hover && "hover:bg-cardHover hover:border-white/10",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};
