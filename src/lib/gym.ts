export const business = {
  name: "THE IRON GYM",
  phone: "+91 96890 48613",
  phoneHref: "tel:+919689048613",
  whatsappNumber: "919689048613",
  maps: "https://www.google.com/maps/search/?api=1&query=THE+IRON+GYM+Wadgaon+Sheri+Pune",
  address: "S. No. 50/11, Kanaskar Bldg, Mahadeonagar, Old Mundhwa Road, near Bollywood Cinema, Wadgaon Sheri, Pune, Maharashtra 411014, India",
  weekdayHours: "6:00 AM – 10:00 PM",
  sundayHours: "Please call to confirm",
};

export function enquiryUrl(name = "", phone = "", interest = "Membership enquiry") {
  const message = [
    "Hello THE IRON GYM,",
    name.trim() ? `My name is ${name.trim()}.` : "",
    `I'm interested in: ${interest}.`,
    "Please share availability and membership details.",
    phone.trim() ? `My contact number is ${phone.trim()}.` : "",
  ].filter(Boolean).join("\n");
  return `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`;
}