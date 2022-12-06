import React from "react";
import cn from "classnames";
import styles from "./button.module.css";
import { Link } from "react-router-dom";

// const LinkButton = ({ href, children, ...props }) => {
//   return (
//     <Link href={href} as={href}>
//       <a {...props}>{children}</a>
//     </Link>
//   );
// };

// const BaseButton = ({ children, ...props }) => {
//   return (
//     <button type="button" {...props}>
//       {children}
//     </button>
//   );
// };

// const Button = ({
//   primary,
//   secondary,
//   full = false,
//   isLoading = false,
//   children,
//   className,
//   ...props
// }) => {
//   const Comp = props.href ? LinkButton : BaseButton;
//   return (
//     <Comp
//       className={cn(
//         "button",
//         primary && "primary",
//         secondary && "secondar",
//         full && "full",
//         isLoading && "isLoading",
//         className
//       )}
//       {...props}
//     >
//       {children}
//     </Comp>
//   );
// };

const LinkButton = ({ href, children, ...props }) => {
  return (
    <Link href={href} as={href}>
      <a {...props}>{children}</a>
    </Link>
  );
};

const BaseButton = ({ children, ...props }) => {
  return (
    <button type="button" {...props}>
      {children}
    </button>
  );
};

const Button = ({
  primary,
  secondary,
  full = false,
  isLoading = false,
  children,
  className,
  ...props
}) => {
  const Comp = props.href ? LinkButton : BaseButton;
  return (
    <Comp
      className={cn(
        styles.button,
        primary && styles.primary,
        secondary && styles.secondary,
        full && styles.full,
        isLoading && styles.isLoading,
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
};

export default Button;
