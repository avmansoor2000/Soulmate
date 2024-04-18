const express = require('express');
// const mainRoutes = require('./routes/mainRoutes');

const app = express();
const port = 3001; // Or any other port you prefer

app.use(express.json());
// app.use('/api', mainRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
