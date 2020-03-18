import { CommunicationIcon } from "@orbit-ui/react-icons/src";
import { Label } from "@orbit-ui/react-label/src";
import { Radio } from "@orbit-ui/react-input/src";
import { createChromaticSection, paramsBuilder, storiesOfBuilder } from "@utils";

function stories(segment) {
    return storiesOfBuilder(module, createChromaticSection("Radio"))
        .segment(segment)
        .parameters(paramsBuilder()
            .chromaticDelay(100)
            .build())
        .build();
}

function createRadio({ text = "Milky Way", ...otherProps } = {}) {
    return (
        <Radio
            text={text}
            {...otherProps}
        />
    );
}

stories()
    .add("text", () =>
        createRadio()
    )
    .add("checked", () =>
        createRadio({
            checked: true
        })
    )
    .add("no text", () =>
        createRadio({
            text: null
        })
    )
    .add("disabled", () =>
        <div className="flex">
            {createRadio({
                disabled: true,
                className: "mr5"
            })}
            {createRadio({
                disabled: true,
                checked: true,
                className: "mr5"
            })}
            {createRadio({
                disabled: true,
                text: null
            })}
        </div>
    )
    .add("readonly", () =>
        <div className="flex">
            {createRadio({
                readOnly: true,
                className: "mr5"
            })}
            {createRadio({
                readOnly: true,
                checked: true,
                className: "mr5"
            })}
            {createRadio({
                readOnly: true,
                text: null
            })}
        </div>
    )
    .add("icon", () =>
        <div className="flex flex-column">
            <div className="flex" style={{ marginBottom: "150px" }}>
                {createRadio({
                    icon: <CommunicationIcon />,
                    text: null,
                    size: "small",
                    className: "mr5"
                })}
                {createRadio({
                    icon: <CommunicationIcon />,
                    size: "small"
                })}
            </div>
            <div className="flex" style={{ marginBottom: "150px" }}>
                {createRadio({
                    icon: <CommunicationIcon />,
                    text: null,
                    className: "mr5"
                })}
                {createRadio({
                    icon: <CommunicationIcon />
                })}
            </div>
            <div className="flex">
                {createRadio({
                    icon: <CommunicationIcon />,
                    text: null,
                    size: "large",
                    className: "mr5"
                })}
                {createRadio({
                    icon: <CommunicationIcon />,
                    size: "large"
                })}
            </div>
        </div>
    )
    .add("label", () =>
        <div className="flex flex-column">
            <div className="flex" style={{ marginBottom: "150px" }}>
                {createRadio({
                    label: <Label>6</Label>,
                    text: null,
                    size: "small",
                    className: "mr5"
                })}
                {createRadio({
                    label: <Label>6</Label>,
                    size: "small"
                })}
            </div>
            <div className="flex" style={{ marginBottom: "150px" }}>
                {createRadio({
                    label: <Label>6</Label>,
                    text: null,
                    className: "mr5"
                })}
                {createRadio({
                    label: <Label>6</Label>
                })}
            </div>
            <div className="flex">
                {createRadio({
                    label: <Label>6</Label>,
                    text: null,
                    size: "large",
                    className: "mr5"
                })}
                {createRadio({
                    label: <Label>6</Label>,
                    size: "large"
                })}
            </div>
        </div>
    )
    .add("size", () =>
        <div className="flex">
            {createRadio({
                size: "small",
                className: "mr5"
            })}
            {createRadio({
                className: "mr5"
            })}
            {createRadio({
                size: "large"
            })}
        </div>
    )
    .add("group", () =>
        <div className="flex flex-column">
            <Radio text="Mars" name="checkboxRadioGroup" value="mars" className="mb2" />
            <Radio text="Moon" name="checkboxRadioGroup" value="moon" className="mb2" />
            <Radio text="Venus" name="checkboxRadioGroup" value="venus" />
        </div>
    );