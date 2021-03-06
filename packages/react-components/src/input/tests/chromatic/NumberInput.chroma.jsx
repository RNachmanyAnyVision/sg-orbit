import { EditIcon } from "@react-components/icons";
import { Inline, Stack } from "@react-components/layout";
import { NumberInput } from "@react-components/input";
import { createChromaticSection, paramsBuilder, storiesOfBuilder } from "@utils";

function stories(segment) {
    return storiesOfBuilder(module, createChromaticSection("NumberInput"))
        .segment(segment)
        .parameters(paramsBuilder()
            .chromaticDelay(100)
            .canvasLayout({ width: "80%" })
            .build())
        .build();
}

stories()
    .add("default", () =>
        <Inline align="end">
            <NumberInput size="small" placeholder="Age" />
            <NumberInput placeholder="Age" />
            <NumberInput size="large" placeholder="Age" />
        </Inline>
    )
    .add("min / max", () =>
        <Stack>
            <Inline>
                <NumberInput min={1} max={15} defaultValue={20} placeholder="Age" />
                <NumberInput min={1} max={15} defaultValue={-20} placeholder="Age" />
            </Inline>
            <div>
                <NumberInput validationState="valid" min={1} max={15} defaultValue={20} placeholder="Age" />
            </div>
        </Stack>
    )
    .add("integer value", () =>
        <NumberInput defaultValue={12} step={1} placeholder="Age" />
    )
    .add("decimal value", () =>
        <NumberInput defaultValue={12.10} step={0.1} placeholder="Grams" />
    )
    .add("icon", () =>
        <Inline align="end">
            <NumberInput iconLeft={<EditIcon />} size="small" placeholder="Age" />
            <NumberInput iconLeft={<EditIcon />} placeholder="Age" />
            <NumberInput iconLeft={<EditIcon />} size="large" placeholder="Age" />
        </Inline>
    )
    .add("fluid", () =>
        <NumberInput fluid placeholder="Age" />
    )
    .add("label", () =>
        <Inline align="end">
            <NumberInput label="Age" size="small" />
            <NumberInput label="Age" />
            <NumberInput label="Age" size="large" />
        </Inline>
    )
    .add("invalid", () =>
        <Stack>
            <Inline align="end">
                <NumberInput validationState="invalid" size="small" placeholder="Age" />
                <NumberInput validationState="invalid" placeholder="Age" />
                <NumberInput validationState="invalid" size="large" placeholder="Age" />
            </Inline>
            <Inline align="end">
                <NumberInput invalidMessage="Try again!" validationState="invalid" size="small" placeholder="Age" />
                <NumberInput invalidMessage="Try again!" validationState="invalid" placeholder="Age" />
                <NumberInput invalidMessage="Try again!" validationState="invalid" size="large" placeholder="Age" />
            </Inline>
        </Stack>
    )
    .add("readonly", () =>
        <NumberInput readOnly placeholder="Age" />
    )
    .add("disabled", () =>
        <NumberInput disabled placeholder="Age" />
    )
    .add("loading", () =>
        <Inline align="end">
            <NumberInput loading size="small" placeholder="Age" />
            <NumberInput loading placeholder="Age" />
            <NumberInput loading size="large" placeholder="Age" />
        </Inline>
    )
    .add("transparent", () =>
        <Inline align="end">
            <NumberInput variant="transparent" size="small" placeholder="Age" />
            <NumberInput variant="transparent" placeholder="Age" />
            <NumberInput variant="transparent" size="large" placeholder="Age" />
        </Inline>
    )
    .add("autofocus", () =>
        <NumberInput autoFocus placeholder="Age" />
    )
    .add("when disabled do not autofocus", () =>
        <NumberInput autoFocus disabled placeholder="Age" />
    )
    .add("autofocus with delay", () =>
        <NumberInput autoFocus autoFocusDelay={5} placeholder="Age" />
    );
