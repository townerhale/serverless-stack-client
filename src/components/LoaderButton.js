//used to deal with React components that are not dealing directly with our API or responding to routes
import React from "react";
import { Button, Glyphicon } from "react-bootstrap";
import "./LoaderButton.css";

//ensures that the button is disabled based on isLoading flag (set to true when logged in)
export default function LoaderButton({
    isLoading,
    className = "",
    disabled = false,
 ...props
}) {
 return (
    <Button
        className={`LoaderButton ${className}`}
        disabled={disabled || isLoading}
        {...props}
    >
        {isLoading && <Glyphicon glyph="refresh"
    className="spinning" />}
        {props.children}
    </Button>
 );
}