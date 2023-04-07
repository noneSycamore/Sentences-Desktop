/** https://docs.microsoft.com/en-us/windows/desktop/api/winbase/nf-winbase-setthreadexecutionstate */
export var EXECUTION_STATE;
(function (EXECUTION_STATE) {
    /**
     * Enables away mode. This value must be specified with ES_CONTINUOUS.
     * Away mode should be used only by media-recording and media-distribution
     * applications that must perform critical background processing on desktop
     * computers while the computer appears to be sleeping. See Remarks.
     */
    EXECUTION_STATE[EXECUTION_STATE["ES_CONTINUOUS"] = 2147483648] = "ES_CONTINUOUS";
    /**
     * Informs the system that the state being set should remain in effect until
     * the next call that uses ES_CONTINUOUS and one of the other state flags is cleared.
     */
    EXECUTION_STATE[EXECUTION_STATE["ES_AWAYMODE_REQUIRED"] = 64] = "ES_AWAYMODE_REQUIRED";
    /** Forces the display to be on by resetting the display idle timer. */
    EXECUTION_STATE[EXECUTION_STATE["ES_SYSTEM_REQUIRED"] = 1] = "ES_SYSTEM_REQUIRED";
    /** Forces the system to be in the working state by resetting the system idle timer. */
    EXECUTION_STATE[EXECUTION_STATE["ES_DISPLAY_REQUIRED"] = 2] = "ES_DISPLAY_REQUIRED";
})(EXECUTION_STATE = EXECUTION_STATE || (EXECUTION_STATE = {}));
//# sourceMappingURL=constants.js.map