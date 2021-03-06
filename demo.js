const enrollments = [
  {
    id: 1,
    role: "Student",
    user_id: 1,
    course_id: 1,
    created_at: "2021-12-10T16:49:06.538Z",
    updated_at: "2021-12-10T16:49:06.538Z",
  },
  {
    id: 2,
    role: "Student",
    user_id: 2,
    course_id: 1,
    created_at: "2021-12-10T16:49:06.538Z",
    updated_at: "2021-12-10T16:49:06.538Z",
  },
  {
    id: 3,
    role: "Ta",
    user_id: 2,
    course_id: 2,
    created_at: "2021-12-10T16:49:06.538Z",
    updated_at: "2021-12-10T16:49:06.538Z",
  },
  {
    id: 4,
    role: "Teacher",
    user_id: 1,
    course_id: 2,
    created_at: "2021-12-10T16:49:06.538Z",
    updated_at: "2021-12-10T16:49:06.538Z",
  },
];
const courses = [
  {
    id: 1,
    name: "Math",
    created_at: "2021-12-10T16:49:06.154Z",
    updated_at: "2021-12-10T16:49:06.154Z",
  },
  {
    id: 2,
    name: "English",
    created_at: "2021-12-10T16:49:06.154Z",
    updated_at: "2021-12-10T16:49:06.154Z",
  },
];
const users = [
  {
    id: 1,
    name: "Lamonica Ryan Esq.",
    created_at: "2021-12-10T16:49:06.496Z",
    updated_at: "2021-12-10T16:49:06.496Z",
  },
  {
    id: 2,
    name: "Bob Esq.",
    created_at: "2021-12-10T16:49:06.496Z",
    updated_at: "2021-12-10T16:49:06.496Z",
  },
];

// =>
[
  {
    course: "Math",
    users: [
      { name: "Lamonica Ryan Esq.", role: "Student" },
      { name: "BOb Esq.", role: "Student" },
    ],
  },
  {
    course: "English",
    users: [
      { name: "Lamonica Ryan Esq.", role: "Teacher" },
      { name: "BOb Esq.", role: "TA" },
    ],
  },
];

const getEnrolledUsers = (courseId) => {
  let courseEnrollments = enrollments.filter((e) => e.course_id == courseId);
  let usersData = courseEnrollments.map((ce) => {
    let user = users.find((u) => u.id === ce.user_id);
    return { name: user.name, role: ce.role };
  });
  return usersData;
};

const normalizeCourseData = () => {
  let coursesData = courses.map((c) => {
    return { name: c.name, users: getEnrolledUsers(c.id) };
  });

  return coursesData;
};

const x = normalizeCourseData();
console.log("x", x);

// works
// works
// readibality
// efficent
