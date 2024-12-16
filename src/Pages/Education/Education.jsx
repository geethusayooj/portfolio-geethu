import React from "react";
import { FaDownload } from "react-icons/fa";
import { Card, CardContent, Typography, Button, CardActions, Box } from "@mui/material";

// Education Card Component
const EducationCard = ({ title, institution, location, duration, description }) => {
  return (
    <Card sx={{ maxWidth: 345, marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>{institution}</strong>, {location}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <i>{duration}</i>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

// Certificate Card Component
const CertificateCard = ({ title, issuer, duration, downloadableLink }) => {
  return (
    <Card sx={{ maxWidth: 345, marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>{issuer}</strong> | {duration}
        </Typography>
      </CardContent>
      <CardActions>
        {downloadableLink && (
          <Button size="small" href={downloadableLink} download startIcon={<FaDownload />}>
            Download Certificate
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

// Education and Certificates Section
const Education = () => {
  return (
    <Box id="education" sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
       
      </Typography>

      <Box>
        {/* Education Cards */}
        <EducationCard
          title="Full Stack Web Development"
          institution="Ironhack"
          location="Berlin, Germany"
          duration="September 2024 - December 2024"
          description="Focused on MERN stack development, responsive design, and full-cycle application development."
        />
        <EducationCard
          title="Master of Technology - Communication Engineering"
          institution="Royal College of Engineering & Technology"
          location="Kerala, India"
          duration="April 2016 - April 2018"
          description="Achieved a CGPA of 8.82 and gained expertise in communication protocols and digital electronics."
        />
        <EducationCard
          title="Bachelor of Technology - Electronics & Communication Engineering"
          institution="Universal Engineering College"
          location="Kerala, India"
          duration="April 2012 - April 2016"
          description="Graduated with a CGPA of 8.09 and gained hands-on experience with circuit design and embedded systems."
        />
      </Box>

      <Typography variant="h4" gutterBottom sx={{ marginTop: 4 }}>
        Certificates & Achievements
      </Typography>

      <Box>
        {/* Certificate Cards */}
        <CertificateCard
          title="Ironhack Full Stack Web Development Bootcamp"
          issuer="Ironhack"
          duration="September 2024 - December 2024"
          downloadableLink="path_to_certificate.pdf"  // Replace with actual certificate link if available
        />
      </Box>
    </Box>
  );
};

export default Education;
