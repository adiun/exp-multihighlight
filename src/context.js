import React from "react";

export const defaultSpanTheme = { narrative: true, md: false, ehr: false };
export const SpanContext = React.createContext(defaultSpanTheme);
