import Card from "./Card";
import React, { useState } from 'react'

const Cards = (props) => {
    const [likedCourses, setLikedCourses] = useState([]);
    const category = props.category;
    const courses = props.courses || {};

    function getCourses() {
        if (!courses) return [];
        
        if (category === "All") {
            let allCourses = [];
            Object.values(courses).forEach((array) => {
                if (Array.isArray(array)) {
                    array.forEach((courseData) => {
                        allCourses.push(courseData);
                    });
                }
            });
            return allCourses;
        } else {
            return courses[category] || [];
        }
    }

    const coursesToRender = getCourses();

    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {coursesToRender.map((course) => (
                <Card 
                    course={course} 
                    key={course.id} 
                    likedCourses={likedCourses} 
                    setLikedCourses={setLikedCourses} 
                />
            ))}
        </div>
    );
};

export default Cards;
