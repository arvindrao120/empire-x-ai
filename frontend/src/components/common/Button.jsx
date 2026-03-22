import { cn } from '../../utils/cn';
import { motion } from 'framer-motion';

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className, 
  as = 'button',
  ...props 
}) => {
  const Component = motion[as] || motion.button;
  
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-md transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primaryDark shadow-[0_0_15px_rgba(255,107,107,0.3)] hover:shadow-[0_0_25px_rgba(255,107,107,0.5)]",
    secondary: "bg-cardAlt text-textMain hover:bg-sectionAlt border border-border-color/[var(--border-opacity)]",
    outline: "border border-textMain/20 text-textMain hover:bg-black/5 dark:hover:bg-white/5",
    ghost: "text-textMuted hover:text-textMain hover:bg-black/5 dark:hover:bg-white/5",
    gradient: "bg-gradient-to-r from-primary to-primaryDark text-white hover:shadow-[0_0_20px_rgba(255,107,107,0.6)]",
  };
  
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base font-semibold uppercase tracking-wider",
  };

  return (
    <Component
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </Component>
  );
};
