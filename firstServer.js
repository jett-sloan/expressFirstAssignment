const express = require('express')
const ExpressError = require('./expressError')
const app = express();

const { calculateMean, calculateMedian, calculateMode } = require('./helper');


app.use(express.json());
app.use(express.urlencoded({ extended: true }))


app.get('/mean', (req,res) =>{

    if (!req.query.nums) {
        return res.status(400).json({ error: 'nums query parameter is missing' });
    }

    let numsAsString = req.query.nums.split(',')
    const nums = numsAsString.map(num => Number(num));
    const mean = calculateMean(nums);
    res.json({ operation: 'mean', value: mean });
})
app.get('/median',(req,res) =>{
    let numsAsString = req.query.nums.split(',')
    const nums = numsAsString.map(num => Number(num));
    const median = calculateMedian(nums)
    res.json({operation: 'median',value: median })

})
app.get('/mode', (req,res)=>{
    let numsAsString = req.query.nums.split(',')
    const nums = numsAsString.map(num => Number(num));
    const mode = calculateMode(nums)
    res.json({operation: 'mode', value: mode})
})
app.listen(3000, ()=> {
    console.log("Server running on port 3000")
})