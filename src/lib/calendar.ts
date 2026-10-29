export function getGoogleCalendarUrl() {
  const title = encodeURIComponent("National Rankers Felicitation Ceremony & Service Orientation – UPSC CSE (MIT-WPU)");
  const details = encodeURIComponent(
    "Honouring UPSC CSE Rankers, interactive service orientation with civil servants (IAS/IPS/IFS/IRS), guidance masterclasses and mentorship sessions at MIT-WPU Pune.\nOfficial link: https://mitwpu.edu.in"
  );
  const location = encodeURIComponent("Swami Vivekananda Sabhagruha, MIT World Peace University, Paud Road, Kothrud, Pune - 411038");
  // 14 Nov 2026 09:30 AM to 06:15 PM IST (UTC +5:30 -> UTC: 04:00 to 12:45)
  const start = "20261114T040000Z";
  const end = "20261114T124500Z";

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&details=${details}&location=${location}`;
}

export function downloadIcsFile() {
  const icsData = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//MIT World Peace University//UPSC Felicitation 2026//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    "UID:mitwpu-upsc-20261114@mitwpu.edu.in",
    "DTSTAMP:20261029T000000Z",
    "DTSTART:20261114T040000Z",
    "DTEND:20261114T124500Z",
    "SUMMARY:National Rankers Felicitation Ceremony & Service Orientation (UPSC CSE) - MIT-WPU",
    "DESCRIPTION:Prestigious felicitation of UPSC CSE rankers, IAS/IPS service orientation & mentorship by MIT World Peace University, Pune.",
    "LOCATION:Swami Vivekananda Sabhagruha, MIT World Peace University, Kothrud, Pune",
    "STATUS:CONFIRMED",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const blob = new Blob([icsData], { type: "text/calendar;charset=utf-8" });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "MITWPU_UPSC_Felicitation_2026.ics");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
}
