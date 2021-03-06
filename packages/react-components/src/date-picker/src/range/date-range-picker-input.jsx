import { DatePickerTextboxInput } from "../date-picker-textbox-input";
import { PureComponent, forwardRef } from "react";
import { bool, func, oneOf, string } from "prop-types";
import { isNil } from "lodash";
import { momentObj as momentType } from "react-moment-proptypes";

// Sizes constants are duplicated here until https://github.com/reactjs/react-docgen/pull/352 is merged. Otherwise it will not render properly in the docs.
const SIZES = ["small", "medium", "large"];

export class InnerDateRangePickerInput extends PureComponent {
    static propTypes = {
        /**
         * A controlled start date value.
         */
        startDate: momentType,
        /**
         * A controlled start date value.
         */
        endDate: momentType,
        /**
         * Called when a clear event happens.
         * @param {SyntheticEvent} event - React's original SyntheticEvent.
         * @returns {void}
         */
        onClear: func,
        /**
         * Whether the calendar selected date(s) can be cleared.
         */
        allowClear: bool,
        /**
         * A format to display the currently applied date(s).
         */
        rangeFormat: string,
        /**
         * A format to display a date.
         */
        dateFormat: string,
        /**
         * Whether the date picker is opened.
         */
        open: bool,
        /**
        * A date picker can have different sizes.
        */
        size: oneOf(SIZES),
        /**
         * @ignore
         */
        active: bool,
        /**
         * @ignore
         */
        focus: bool,
        /**
         * @ignore
         */
        hover: bool
    };

    static defaultProps = {
        rangeFormat: "{startDate} - {endDate}"
    };

    getValue() {
        const { startDate, endDate, rangeFormat, dateFormat } = this.props;

        if (!isNil(startDate)) {
            if (!isNil(endDate)) {
                return rangeFormat.replace("{startDate}", startDate.format(dateFormat)).replace("{endDate}", endDate.format(dateFormat));
            }

            return startDate.format(dateFormat);
        }

        return "";
    }

    render() {
        const { onClear, onClick, onKeyDown, onFocus, onBlur, allowClear, placeholder, disabled, fluid, open, size, active, focus, hover, className, forwardedRef, ...rest } = this.props;

        return (
            <DatePickerTextboxInput
                {...rest}
                value={this.getValue()}
                onClear={onClear}
                onClick={onClick}
                onKeyDown={onKeyDown}
                onFocus={onFocus}
                onBlur={onBlur}
                allowClear={allowClear}
                placeholder={placeholder}
                disabled={disabled}
                fluid={fluid}
                open={open}
                size={size}
                active={active}
                focus={focus}
                hover={hover}
                className={className}
                ref={forwardedRef}
            />
        );
    }
}

export const DateRangePickerInput = forwardRef((props, ref) => (
    <InnerDateRangePickerInput { ...props } forwardedRef={ref} />
));
