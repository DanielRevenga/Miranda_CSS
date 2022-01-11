
const runFlatpickr = () => {
    
    const config = {
        enableTime: true,
        dateFormat: "Y-m-d H:i",
    }
    const calendars = flatpickr(".flatpickr", config);
    const myFlatpickr = calendars[0] // flatpickr
    
};

export default runFlatpickr;