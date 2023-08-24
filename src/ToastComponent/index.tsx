import React, { useState } from "react";
import Toast from "./Toast/index.tsx";
import styles from "./styles.module.css";

const ToastComponent = () => {
    const [isToastVisible, setIsToastVisible] = useState(false);

    const handleShowToast = () => {
        setIsToastVisible(true);
    };

    const handleConfirm = (consoleMessage: string) => {
        console.log(consoleMessage);
        setIsToastVisible(!isToastVisible);
    };

    return (
        <div className={styles.container}>
            <button onClick={handleShowToast} className={styles.button}>
                Click me
            </button>
            {isToastVisible ? (
                <Toast
                    onConfirm={handleConfirm}
                    message="Are you sure to confirm ? "
                />
            ) : null}
        </div>
    );
};
export default ToastComponent;
