import React, {
  InputHTMLAttributes,
  SelectHTMLAttributes,
  useState,
} from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";

interface IInputProps
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label?: string | React.ReactNode;
  inputKey: string;
  error?: string | undefined;
  touched?: boolean | undefined;
  className?: string | undefined;
  rootClassName?: string | undefined;
  labelClassName?: string | undefined;
  helperTextClassName?: string | undefined;
  placeholder?: string | undefined;
  isTextArea?: boolean | undefined;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PasswordInput = ({ content, show, setShow }: any) => {
  return (
    <div className="relative">
      {content}

      <div
        onClick={() => setShow((prev: unknown) => !prev)}
        className={twMerge("absolute top-6 font-bold right-3")}
      >
        {show ? <FaRegEyeSlash /> : <FaRegEye />}
      </div>
    </div>
  );
};

export default function CustomImput({
  inputKey,
  isTextArea,
  label,
  touched,
  error,
  placeholder,
  className,
  labelClassName,
  rootClassName,
  helperTextClassName,
  ...rest
}: IInputProps) {
  const [show, setShow] = useState<boolean>(false);

  const content = (
    <input
      id={inputKey}
      name={inputKey}
      placeholder={
        placeholder ||
        `Enter ${(
          (typeof label === "string" ? label : "") || inputKey
        ).toLowerCase()}`
      }
      className={twMerge(
        "mt-2 px-3 py-3 w-full text-base border outline-0 rounded hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 transition duration-200 dark:border-[#172953]",
        "dark:bg-[#0C142A] dark:shadow",
        error && touched
          ? "focus:ring-red-500 border-red-500"
          : "focus:ring-primary",
        className
      )}
      {...rest}
      type={
        rest.type === "password" ? (show ? "text" : "password") : rest?.type
      }
    />
  );

  return (
    <div className={rootClassName}>
      {!!label && (
        <label
          className={twMerge("font-bold text-base", labelClassName)}
          htmlFor={inputKey}
        >
          {" "}
          {label}{" "}
        </label>
      )}

      {isTextArea ? (
        <textarea
          id={inputKey}
          name={inputKey}
          placeholder={
            placeholder ||
            `Enter ${(
              (typeof label === "string" ? label : "") || inputKey
            ).toLowerCase()}`
          }
          className={twMerge(
            "mt-2 px-3 py-3 w-full min-h-[150px] text-base border outline-0 rounded hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 transition duration-200",
            "dark:bg-[#0C142A] dark:border-[#172953] dark:shadow",
            error && touched
              ? "focus:ring-red-500 border-red-500"
              : "focus:ring-primary",
            className
          )}
          {...rest}
        />
      ) : rest?.type === "password" ? (
        <PasswordInput show={show} content={content} setShow={setShow} />
      ) : (
        content
      )}
      <p
        className={twMerge(
          "text-xs mt-1 text-rose-500",
          !(error && touched) && "hidden",
          helperTextClassName
        )}
      >
        {error}
      </p>
    </div>
  );
}

interface ISelect extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string | React.ReactNode;
  inputKey: string;
  error?: string | undefined;
  touched?: boolean | undefined;
  className?: string | undefined;
  rootClassName?: string | undefined;
  labelClassName?: string | undefined;
  helperTextClassName?: string | undefined;
  placeholder?: string | undefined;
  isLoading?: boolean | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options?: any[];
}

export const Select = ({
  inputKey,
  label,
  touched,
  error,
  isLoading,
  options,
  placeholder,
  className,
  labelClassName,
  rootClassName,
  helperTextClassName,
  ...rest
}: ISelect) => {
  return (
    <div className={twMerge(`form-group`, rootClassName)}>
      <label
        htmlFor={inputKey}
        className={twMerge("font-bold", labelClassName)}
      >
        {label}
      </label>

      <select
        className={twMerge(
          "mt-2 px-3 py-3 text-base w-full border outline-0 rounded hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 transition duration-200",
          error && touched
            ? "focus:ring-red-500 border-red-500"
            : "focus:ring-indigo-500",
          className,
          "dark:bg-[#0C142A] dark:border-[#172953] dark:shadow"
        )}
        id={inputKey}
        name={inputKey}
        {...rest}
      >
        <option value={""} disabled>
          {placeholder || `Select ${String(label).toLowerCase()}`}
        </option>
        {isLoading ? (
          <option value={""}>Fetching data...</option>
        ) : (
          options?.map(({ label, value }, index) => (
            <option value={value} key={index} className={"capitalize"}>
              {label}
            </option>
          ))
        )}
      </select>
      <p
        className={twMerge(
          "text-xs mt-1 text-pink-brand",
          !(error && touched) && "hidden",
          helperTextClassName
        )}
      >
        {error}
      </p>
    </div>
  );
};
