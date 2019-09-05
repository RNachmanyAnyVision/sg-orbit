import { isNil } from "lodash";
import { storiesOf } from "@storybook/react";

class StoriesConfigurationBuilder {
    _module;
    _section;
    _segment;
    _layout = {}
    _chromatic = {}

    constructor(theModule, section) {
        if (!theModule) {
            throw new Error("StoriesConfigurationBuilder.ctor - module is required.");
        }

        if (!section) {
            throw new Error("StoriesConfigurationBuilder.ctor - section is required.");
        }

        this._module = theModule;
        this._section = section;
    }

    segment(segment) {
        if (!isNil(segment)) {
            this._segment = segment;
        }

        return this;
    }

    layout(config) {
        if (!isNil(config)) {
            this._layout = {
                ...this._layout,
                ...config
            };
        }

        return this;
    }

    layoutWidth(width) {
        if (!isNil(width)) {
            this._layout.width = width;
        }

        return this;
    }

    chromatic(config) {
        if (!isNil(config)) {
            this._chromatic = {
                ...this._chromatic,
                ...config
            };
        }

        return this;
    }

    chromaticIgnoreStory() {
        this._chromatic.disable = true;

        return this;
    }

    chromaticDelay(delay) {
        if (!isNil(delay)) {
            this._chromatic.delay = delay;
        }

        return this;
    }

    build() {
        let name = this._section;

        if (!isNil(this._segment)) {
            name += this._segment;
        }

        const parameters = {
            options: {
                layout: this._layout
            },
            chromatic: this._chromatic
        };

        return storiesOf(name, this._module).addParameters(parameters);
    }
}

export function storiesBuilder(theModule, section) {
    return new StoriesConfigurationBuilder(theModule, section);
}
