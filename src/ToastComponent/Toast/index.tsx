import React, { useState } from "react";
import styles from "./styles.module.css";

interface PropsType {
    message: string;
    onConfirm: Function;
}

const Toast = ({ message, onConfirm }: PropsType) => {
    const [showToast, setShowToast] = useState(true);

    const handleConfirm = (consoleMessage: string) => {
        setShowToast(false);
        onConfirm(consoleMessage);
    };

    return showToast ? (
        <div className={styles.toast_div}>
            <div className={styles.toast_message}>{message}</div>
            <div className={styles.button_container}>
                <button
                    className={styles.toast_button}
                    onClick={() => {
                        handleConfirm("Confirmed");
                    }}
                >
                    Confirm
                </button>
                <button
                    className={styles.toast_button}
                    onClick={() => {
                        handleConfirm("Canceled");
                    }}
                >
                    Cancel
                </button>
            </div>
        </div>
    ) : null;
};

export default Toast;
