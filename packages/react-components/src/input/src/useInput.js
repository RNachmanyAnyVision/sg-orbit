import { getSizeClass, mergeClasses, useAutoFocus, useId, useMergedRefs } from "../../shared";
import { useInputMessage } from "./InputMessage";

export function useInput({
    id,
    value,
    placeholder,
    label,
    required,
    description,
    helpMessage,
    invalidMessage,
    validMessage,
    validationState,
    onChange,
    variant,
    type,
    autoFocus,
    autoFocusDelay,
    disabled,
    readOnly,
    fluid,
    loading,
    size,
    active,
    focus,
    hover,
    className,
    wrapperProps = {},
    inputRef: inputRefProp,
    forwardedRef
}) {
    const inputRef = useMergedRefs(inputRefProp, forwardedRef);

    const inputId = useId(id, id ?? "o-ui-input");
    const messageProps = useInputMessage(helpMessage, invalidMessage, validMessage, validationState, size);

    useAutoFocus(inputRef, autoFocus, { delay: autoFocusDelay });

    return {
        wrapperProps: {
            ...wrapperProps,
            className: mergeClasses(
                variant,
                label && "with-label",
                messageProps && "with-message",
                fluid && "fluid",
                loading && "loading",
                validationState,
                getSizeClass(size),
                wrapperProps.className
            )
        },
        inputProps: {
            id: inputId,
            value,
            placeholder,
            onChange,
            className: mergeClasses(
                active && "active",
                focus && "focus",
                hover && "hover",
                className
            ),
            type,
            disabled,
            readOnly,
            "aria-required": required,
            "aria-invalid": validationState === "invalid",
            ref: inputRef
        },
        labelProps: label && {
            htmlFor: inputId,
            required,
            description,
            size,
            children: label
        },
        messageProps
    };
}
