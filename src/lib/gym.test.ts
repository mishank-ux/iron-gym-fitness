import { describe, expect, it } from "vitest";
import { business, enquiryUrl } from "./gym";

describe("Supplied gym contact rules", () => {
  it("calls the supplied business number", () => {
    expect(business.phoneHref).toBe("tel:+919689048613");
  });
  it("sends the enquiry to the supplied WhatsApp number with the visitor's details", () => {
    const url = new URL(enquiryUrl("Priya", "9876543210", "Strength training"));
    expect(url.pathname).toBe("/919689048613");
    expect(url.searchParams.get("text")).toContain("My name is Priya.");
    expect(url.searchParams.get("text")).toContain("I'm interested in: Strength training.");
    expect(url.searchParams.get("text")).toContain("My contact number is 9876543210.");
  });
  it("uses the exact supplied Google Maps link", () => {
    expect(business.maps).toBe("https://www.google.com/maps/search/?api=1&query=THE+IRON+GYM+Wadgaon+Sheri+Pune");
  });
  it("uses supplied weekday hours without claiming Sunday availability", () => {
    expect(business.weekdayHours).toBe("6:00 AM – 10:00 PM");
    expect(business.sundayHours).toBe("Please call to confirm");
  });
});