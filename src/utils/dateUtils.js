export const formatDate = (date) => {
  if (Object.prototype.toString.call(date) !== "[object Date]" || isNaN(date.getTime())) {
    return '';
  }
  return date.getFullYear() + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + String(date.getDate()).padStart(2, '0');
};

export const formatDisplayDate = (dateString) => {
    const separator = dateString.includes('/') ? '/' : '-';
    const [year, month, day] = dateString.split(separator);
    return `${day}.${month}.${year}`;
  };

export const parseDateString = (dateString) => {
  return new Date(dateString.split('/').join('-'));
};

export const addDays = (date, days) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

export const handleStartDateChange = (startDate, endDate, setStartDate, setEndDate, setMinEndDate) => {
  setStartDate(startDate);
  const selectedDate = parseDateString(startDate);
  const currentEndDate = parseDateString(endDate);

  if (currentEndDate > selectedDate) {
    setMinEndDate(startDate);
  } else {
    const newEndDate = addDays(selectedDate, 1);
    const formattedEndDate = formatDate(newEndDate);
    setEndDate(formattedEndDate);
    setMinEndDate(formattedEndDate);
  }
};

export const handleEndDateChange = (endDate, setEndDate) => {
  setEndDate(endDate);
};
