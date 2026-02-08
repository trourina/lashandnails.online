/**
 * Composable for Google Analytics 4 event tracking
 *
 * Usage:
 * const { trackEvent } = useAnalytics()
 * trackEvent('button_click', { button_name: 'Book Now', location: 'hero' })
 */

export const useAnalytics = () => {
  const { gtag } = useScriptGoogleAnalytics();

  /**
   * Track custom event in GA4
   * @param eventName - Name of the event (e.g., 'button_click', 'form_submit')
   * @param eventParams - Additional parameters for the event
   */
  const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
    gtag('event', eventName, eventParams)
  }

  /**
   * Track WhatsApp button click
   * @param location - Where the button was clicked from
   */
  const trackWhatsAppClick = (location: string) => {
    trackEvent('whatsapp_click', {
      button_location: location,
      conversion_type: 'contact',
    })
  }

  /**
   * Track phone call click
   * @param location - Where the button was clicked from
   */
  const trackPhoneClick = (location: string) => {
    trackEvent('phone_click', {
      button_location: location,
      conversion_type: 'contact',
    })
  }

  /**
   * Track service view
   * @param serviceName - Name of the service viewed
   */
  const trackServiceView = (serviceName: string) => {
    trackEvent('view_service', {
      service_name: serviceName,
      content_type: 'service',
    })
  }

  /**
   * Track booking intent (CTA clicks)
   * @param method - Booking method (whatsapp, phone, etc.)
   * @param location - Where the CTA was clicked from
   */
  const trackBookingIntent = (method: string, location: string) => {
    trackEvent('booking_intent', {
      booking_method: method,
      button_location: location,
      conversion_type: 'lead',
    })
  }

  /**
   * Track form submission
   * @param formName - Name of the form (e.g., 'contact_form')
   * @param success - Whether the submission was successful
   */
  const trackFormSubmit = (formName: string, success: boolean = true) => {
    trackEvent('form_submit', {
      form_name: formName,
      success: success,
      conversion_type: 'lead',
    })
  }

  /**
   * Track gallery interaction
   * @param action - Type of interaction (open_lightbox, filter_change)
   * @param category - Gallery category if applicable
   */
  const trackGalleryInteraction = (action: string, category?: string) => {
    trackEvent('gallery_interaction', {
      interaction_type: action,
      category: category,
    })
  }

  /**
   * Track navigation
   * @param destination - Where the user navigated to
   * @param from - Where they came from
   */
  const trackNavigation = (destination: string, from: string) => {
    trackEvent('navigation', {
      destination: destination,
      from: from,
    })
  }

  return {
    trackEvent,
    trackWhatsAppClick,
    trackPhoneClick,
    trackServiceView,
    trackBookingIntent,
    trackFormSubmit,
    trackGalleryInteraction,
    trackNavigation,
  }
}
