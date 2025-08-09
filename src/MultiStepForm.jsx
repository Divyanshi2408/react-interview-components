import React, { useState } from "react";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    courses: [],
  });

  const allCourses = ["React", "Node.js", "MongoDB", "JavaScript"];

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setFormData((prev) => {
      const newCourses = isChecked
        ? [...prev.courses, value]
        : prev.courses.filter((c) => c !== value);
      return { ...prev, courses: newCourses };
    });
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted Successfully!");
    console.log("Submitted Data:", formData);
  };

  return (
    <div style={{ padding: "30px", maxWidth: "500px", margin: "auto", fontFamily: "Arial" }}>
      <h2>📝 Multi-Step Form</h2>
      <p>Step {step} of 3</p>

      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <>
            <div>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{ width: "100%", padding: "8px" }}
              />
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <label>Select Courses:</label>
            {allCourses.map((course) => (
              <div key={course}>
                <label>
                  <input
                    type="checkbox"
                    value={course}
                    checked={formData.courses.includes(course)}
                    onChange={handleCheckboxChange}
                  />
                  {course}
                </label>
              </div>
            ))}
          </>
        )}

        {step === 3 && (
          <>
            <h3>Review Info:</h3>
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Selected Courses:</strong> {formData.courses.join(", ") || "None"}</p>
          </>
        )}

        <div style={{ marginTop: "20px" }}>
          {step > 1 && (
            <button type="button" onClick={handleBack} style={{ marginRight: "10px" }}>
              Back
            </button>
          )}
          {step < 3 ? (
            <button type="button" onClick={handleNext}>
              Next
            </button>
          ) : (
            <button type="submit">Submit</button>
          )}
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;
