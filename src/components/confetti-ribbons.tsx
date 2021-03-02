import React from "react";

/**
 * ConfettiRibbons component
 *
 * @constructor
 */
const ConfettiRibbons = (): JSX.Element => {
    return (
        <div data-test="component-confetti-ribbons">
            {Array.from({length: 200}).map((v: any, index: number) => (
                <div data-test="elm-confetti-ribbon" key={index} className={"confetti-" + (index + 1)}/>
            ))}
        </div>
    );
};

export default ConfettiRibbons;