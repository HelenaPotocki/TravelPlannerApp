function getTimeDifference(start,end) {
  const convertToMinutes = (time) => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  };
  const difference = convertToMinutes(end) - convertToMinutes(start);
  const intDiffHours = Math.floor(difference / 60);
  const diffMinutes = difference % 60;
  return `${String(intDiffHours).padStart(2, '0')}:${String(diffMinutes).padStart(2, '0')}`;
}

export default getTimeDifference;