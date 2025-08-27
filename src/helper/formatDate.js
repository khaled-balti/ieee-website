export function formatDate(inputDate) {
    // Split the input date by slashes
    const parts = inputDate.split('/');

    // Ensure we have three parts (day, month, year)
    if (parts.length !== 3) {
      return "Invalid date format";
    }

    // Extract day, month, and year
    const day = parts[0];
    const month = parts[1];
    const year = parts[2];

    // Array of month names
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    // Convert month number to month name (subtract 1 because array is zero-indexed)
    const monthName = monthNames[parseInt(month) - 1];

    // Return formatted date string
    return `${day} ${monthName} ${year}`;
  }
