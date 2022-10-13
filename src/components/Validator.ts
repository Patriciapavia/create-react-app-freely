export const validate = (
  name: string,
  setError: any,
  startDate: string,
  endDate: string,
  destination: string[]
) => {
  if (name === "") {
    setError("Title is required");
    return;
  }

  console.log(!destination.length);

  if (startDate === "") {
    setError("Please select start date");
    return;
  }
  if (endDate === "") {
    setError("Please select end date");
    return;
  }
  if (startDate > endDate) {
    setError("end date must be before start date");
    return;
  }
  if (!destination.length) {
    setError("Please select at least one destionation");
    return;
  }

  return true;
};
