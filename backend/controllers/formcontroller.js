const handleContactForm = (req, res) => {
  const { name, email, message } = req.body;
  const resume = req.file;

  console.log("New form submission:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);
  console.log("Resume file:", resume?.path);

  res.status(200).send('Form submitted successfully!');
};

module.exports = { handleContactForm };