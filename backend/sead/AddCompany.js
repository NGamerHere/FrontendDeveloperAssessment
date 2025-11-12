import connectDB from '../config/db.js';
import Company from "../Models/Company.js";
connectDB();
export const companies = [
    {
        name: "TechNova Solutions",
        industry: "Software",
        location: "New York, USA",
        website: "https://www.technova.com",
        founded: 2012,
        employees: 150
    },
    {
        name: "EcoWave Industries",
        industry: "Renewable Energy",
        location: "Berlin, Germany",
        website: "https://www.ecowave.de",
        founded: 2015,
        employees: 80
    },
    {
        name: "Skyline Logistics",
        industry: "Logistics",
        location: "Mumbai, India",
        website: "https://www.skylinelogistics.in",
        founded: 2008,
        employees: 320
    },
    {
        name: "BluePeak Finance",
        industry: "Finance",
        location: "London, UK",
        website: "https://www.bluepeakfinance.co.uk",
        founded: 2005,
        employees: 210
    },
    {
        name: "HealthBridge Labs",
        industry: "Healthcare",
        location: "Toronto, Canada",
        website: "https://www.healthbridgelabs.ca",
        founded: 2016,
        employees: 65
    },
    {
        name: "PixelCraft Studios",
        industry: "Design",
        location: "Los Angeles, USA",
        website: "https://www.pixelcraftstudios.com",
        founded: 2014,
        employees: 40
    },
    {
        name: "AgriSmart Technologies",
        industry: "Agriculture",
        location: "Chennai, India",
        website: "https://www.agrismarttech.in",
        founded: 2017,
        employees: 95
    },
    {
        name: "CyberShield Security",
        industry: "Cybersecurity",
        location: "Paris, France",
        website: "https://www.cybershield.fr",
        founded: 2011,
        employees: 130
    },
    {
        name: "UrbanNest Realty",
        industry: "Real Estate",
        location: "Sydney, Australia",
        website: "https://www.urbannestrealty.au",
        founded: 2009,
        employees: 50
    },
    {
        name: "FreshMart Organics",
        industry: "Food & Beverages",
        location: "Amsterdam, Netherlands",
        website: "https://www.freshmartorganics.nl",
        founded: 2018,
        employees: 35
    },
    {
        name: "AeroJet Dynamics",
        industry: "Aerospace",
        location: "Seattle, USA",
        website: "https://www.aerojetdynamics.com",
        founded: 2003,
        employees: 500
    },
    {
        name: "BrightLearn Academy",
        industry: "Education",
        location: "Dubai, UAE",
        website: "https://www.brightlearn.ae",
        founded: 2019,
        employees: 60
    },
    {
        name: "CloudWave Networks",
        industry: "Cloud Computing",
        location: "Dublin, Ireland",
        website: "https://www.cloudwavenet.ie",
        founded: 2010,
        employees: 280
    },
    {
        name: "RoboMatrix Automation",
        industry: "Automation",
        location: "Tokyo, Japan",
        website: "https://www.robomatrix.jp",
        founded: 2006,
        employees: 450
    },
    {
        name: "GreenRide Mobility",
        industry: "Automobile",
        location: "Seoul, South Korea",
        website: "https://www.greenride.kr",
        founded: 2014,
        employees: 140
    },
    {
        name: "DataSphere Analytics",
        industry: "Data Analytics",
        location: "San Francisco, USA",
        website: "https://www.datasphere.io",
        founded: 2013,
        employees: 175
    },
    {
        name: "OceanBlue Travels",
        industry: "Travel & Tourism",
        location: "Cape Town, South Africa",
        website: "https://www.oceanbluetravels.co.za",
        founded: 2007,
        employees: 55
    },
    {
        name: "VoltEdge Electronics",
        industry: "Electronics",
        location: "Shenzhen, China",
        website: "https://www.voltedge.cn",
        founded: 2011,
        employees: 390
    },
    {
        name: "MetroStyle Fashion",
        industry: "Fashion",
        location: "Milan, Italy",
        website: "https://www.metrostyle.it",
        founded: 2016,
        employees: 70
    },
    {
        name: "Zenith Construction Group",
        industry: "Construction",
        location: "Doha, Qatar",
        website: "https://www.zenithconstruction.qa",
        founded: 2004,
        employees: 600
    }
];

Company.insertMany(companies);