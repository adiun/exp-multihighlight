import React from "react";

export const defaultSpanTheme = { md: true, ehr: false, narrative: false };
export const SpanContext = React.createContext(defaultSpanTheme);
