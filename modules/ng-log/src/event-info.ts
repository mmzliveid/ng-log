// tslint:disable: no-any

/**
 * The event timing telemetry interface.
 */
export interface EventTimingInfo {
    /**
     * Mapping for custom dimensions and metrics.
     */
    custom_map?: { [key: string]: string };
    /**
     * Metrics associated with this event.
     */
    measurements?: { [key: string]: number };
    /**
     * Additional properties.
     */
    properties?: { [key: string]: any };
    /**
     * The string that will appear as the event label.
     */
    event_label?: string;
    /**
     * The string that will appear as the event category.
     */
    event_category?: string;
}

/**
 * The event telemetry interface.
 */
export interface EventInfo extends EventTimingInfo {
    /**
     * The event action name.
     */
    name: string;
}