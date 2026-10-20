
// ======================================================
// BACKEND JAVA ROADMAP - 65 LESSONS
// ======================================================
const lessons = [

    // ==================================================
    // PHASE 1 - JAVA CORE (Buổi 1 - 10)
    // ==================================================

    {
        id: 1,
        phase: 1,
        category: "Java Core",
        title: "Variables, Data Types & Operators",
        description: "Biến, kiểu dữ liệu, hằng số, ép kiểu và các loại toán tử trong Java.",
        duration: 120,
        icon: "fa-code"
    },

    {
        id: 2,
        phase: 1,
        category: "Java Core",
        title: "Control Flow - Loop",
        description: "if/else, switch, for, while, do-while, break và continue.",
        duration: 120,
        icon: "fa-repeat"
    },

    {
        id: 3,
        phase: 1,
        category: "Java Core",
        title: "Java Strings",
        description: "String, String Pool, StringBuilder, StringBuffer và xử lý chuỗi.",
        duration: 120,
        icon: "fa-font"
    },

    {
        id: 4,
        phase: 1,
        category: "Java Core",
        title: "Collections Framework",
        description: "List, Set, Map, ArrayList, LinkedList, HashSet và HashMap.",
        duration: 120,
        icon: "fa-layer-group"
    },

    {
        id: 5,
        phase: 1,
        category: "Java Core",
        title: "Classes, Objects & Constructors",
        description: "Class, Object, Attribute, Method, Constructor và từ khóa this.",
        duration: 120,
        icon: "fa-cubes"
    },

    {
        id: 6,
        phase: 1,
        category: "Java Core",
        title: "Encapsulation & Static Members",
        description: "Access Modifier, Getter, Setter, Encapsulation và Static.",
        duration: 120,
        icon: "fa-lock"
    },

    {
        id: 7,
        phase: 1,
        category: "Java Core",
        title: "Inheritance - Polymorphism",
        description: "extends, super, Override, Overload, Upcasting và Downcasting.",
        duration: 120,
        icon: "fa-sitemap"
    },

    {
        id: 8,
        phase: 1,
        category: "Java Core",
        title: "Abstract Classes & Interfaces",
        description: "Abstract Class, Abstract Method, Interface và implements.",
        duration: 120,
        icon: "fa-puzzle-piece"
    },

    {
        id: 9,
        phase: 1,
        category: "Java Core",
        title: "Date Time",
        description: "LocalDate, LocalDateTime, DateTimeFormatter và xử lý Exception.",
        duration: 120,
        icon: "fa-calendar"
    },

    {
        id: 10,
        phase: 1,
        category: "Java Core",
        title: "Stream API",
        description: "Lambda Expression, Functional Interface, Stream, filter, map, reduce và collect.",
        duration: 120,
        icon: "fa-water"
    },


    // ==================================================
    // PHASE 2 - SQL DATABASE (Buổi 11 - 15)
    // ==================================================

    {
        id: 11,
        phase: 2,
        category: "SQL",
        title: "Database Introduce",
        description: "DBMS, RDBMS, MySQL, Data Types, Constraint và MySQL Workbench.",
        duration: 120,
        icon: "fa-database"
    },

    {
        id: 12,
        phase: 2,
        category: "SQL",
        title: "Database Relationship",
        description: "One-to-One, One-to-Many, Many-to-Many và khóa ngoại.",
        duration: 120,
        icon: "fa-table"
    },

    {
        id: 13,
        phase: 2,
        category: "SQL",
        title: "Database Design",
        description: "ERD, chuẩn hóa dữ liệu (1NF, 2NF, 3NF) và thiết kế Schema.",
        duration: 120,
        icon: "fa-table"
    },

    {
        id: 14,
        phase: 2,
        category: "SQL",
        title: "JDBC Basic",
        description: "GROUP BY, HAVING, Aggregate Function, DISTINCT và Alias.",
        duration: 120,
        icon: "fa-chart-column"
    },

    {
        id: 15,
        phase: 2,
        category: "SQL",
        title: "JDBC Advanced & DAO",
        description: "INNER JOIN, LEFT JOIN, RIGHT JOIN, SELF JOIN, UNION và Subquery.",
        duration: 120,
        icon: "fa-link"
    },


    // ==================================================
    // PHASE 4 - SPRING BOOT (LÝ THUYẾT) (Buổi 16 - 34)
    // ==================================================

    {
        id: 17,
        phase: 4,
        category: "Spring Boot",
        title: "Tổng quan Java Web  - Spring Framework & Spring Boot",
        description: "Client - Server, HTTP, HTTPS, Web Server, Servlet Container và Tomcat.",
        duration: 120,
        icon: "fa-globe"
    },


    {
        id: 18,
        phase: 4,
        category: "Spring Boot",
        title: "IoC Container & Dependency Injection",
        description: "IoC Container, Bean, Component, Service, Repository và Autowired.",
        duration: 120,
        icon: "fa-diagram-project"
    },

    {
        id: 19,
        phase: 4,
        category: "Spring Boot",
        title: "Xây dựng RESTful API với Spring Boot",
        description: "RestController, RequestMapping, GetMapping, PostMapping và HTTP Method.",
        duration: 120,
        icon: "fa-cloud"
    },

    {
        id: 20,
        phase: 4,
        category: "Spring Boot",
        title: "Request Mapping & Response Handling",
        description: "PutMapping, DeleteMapping, RequestBody, RequestParam, PathVariable và ResponseEntity.",
        duration: 120,
        icon: "fa-arrows-left-right"
    },

    {
        id: 21,
        phase: 4,
        category: "Spring Boot",
        title: "ORM, JPA & Hibernate Fundamentals",
        description: "ORM, JPA, Hibernate, Entity và PersistenceContext.",
        duration: 120,
        icon: "fa-database"
    },

    {
        id: 22,
        phase: 4,
        category: "Spring Boot",
        title: "Entity Mapping",
        description: "@Entity, @Table, @Column, @Id và @GeneratedValue.",
        duration: 120,
        icon: "fa-table"
    },

    {
        id: 23,
        phase: 4,
        category: "Spring Boot",
        title: "Repository Pattern với Spring Data JPA",
        description: "JpaRepository, CRUD Repository và Query Method.",
        duration: 120,
        icon: "fa-folder-tree"
    },

    {
        id: 24,
        phase: 4,
        category: "Spring Boot",
        title: "Service Layer & Business Logic",
        description: "Service Layer, Business Logic và Dependency Injection giữa các tầng.",
        duration: 120,
        icon: "fa-gears"
    },

    {
        id: 25,
        phase: 4,
        category: "Spring Boot",
        title: "One-to-One Relationship Mapping - Phần 1",
        description: "Mapping OneToOne và thiết kế quan hệ Entity.",
        duration: 120,
        icon: "fa-link"
    },

    {
        id: 26,
        phase: 4,
        category: "Spring Boot",
        title: "One-to-One Relationship Mapping - Phần 2",
        description: "Foreign Key, Cascade và thực hành One-to-One.",
        duration: 120,
        icon: "fa-link"
    },

    {
        id: 27,
        phase: 4,
        category: "Spring Boot",
        title: "DTO Pattern, Validation & Entity Mapping",
        description: "Request DTO, Response DTO, Entity ↔ DTO, Validation và Mapper.",
        duration: 120,
        icon: "fa-shuffle"
    },

    {
        id: 28,
        phase: 4,
        category: "Spring Boot",
        title: "One-to-Many & Many-to-One - Phần 1",
        description: "OneToMany, ManyToOne và mappedBy.",
        duration: 120,
        icon: "fa-diagram-project"
    },

    {
        id: 29,
        phase: 4,
        category: "Spring Boot",
        title: "One-to-Many & Many-to-One - Phần 2",
        description: "Thực hành Relationship, Foreign Key và xử lý dữ liệu.",
        duration: 120,
        icon: "fa-diagram-project"
    },

    {
        id: 30,
        phase: 4,
        category: "Spring Boot",
        title: "Cascade Operations & Fetch Strategies",
        description: "Cascade, Lazy Loading và Eager Loading.",
        duration: 120,
        icon: "fa-bolt"
    },

    {
        id: 31,
        phase: 4,
        category: "Spring Boot",
        title: "Many-to-Many Relationship - Phần 1",
        description: "@ManyToMany, @JoinTable và thiết kế quan hệ.",
        duration: 120,
        icon: "fa-network-wired"
    },

    {
        id: 32,
        phase: 4,
        category: "Spring Boot",
        title: "Many-to-Many Relationship - Phần 2",
        description: "Entity trung gian, Association Entity và thiết kế thực tế.",
        duration: 120,
        icon: "fa-network-wired"
    },

    {
        id: 33,
        phase: 4,
        category: "Spring Boot",
        title: "Thư viện & Công cụ hỗ trợ Spring Boot",
        description: "DTO, Lombok, MapStruct và các công cụ hỗ trợ.",
        duration: 120,
        icon: "fa-toolbox"
    },

    {
        id: 34,
        phase: 4,
        category: "Spring Boot",
        title: "Transaction Management & Entity Lifecycle",
        description: "@Transactional, Entity Lifecycle và Dirty Checking.",
        duration: 120,
        icon: "fa-arrows-rotate"
    },


    // ==================================================
    // PHASE 5 - SECURITY JWT (Buổi 35 - 43)
    // ==================================================

    {
        id: 35,
        phase: 5,
        category: "Security",
        title: "Spring Security",
        description: "Kiến trúc Spring Security và Security Filter Chain.",
        duration: 120,
        icon: "fa-shield-halved"
    },

    {
        id: 36,
        phase: 5,
        category: "Security",
        title: "Authentication",
        description: "Authentication, UserDetails và UserDetailsService.",
        duration: 120,
        icon: "fa-user-check"
    },

    {
        id: 37,
        phase: 5,
        category: "Security",
        title: "Password Encoder",
        description: "Password Hashing và BCryptPasswordEncoder.",
        duration: 120,
        icon: "fa-lock"
    },

    {
        id: 38,
        phase: 5,
        category: "Security",
        title: "Authorization",
        description: "Role, Authority và phân quyền API.",
        duration: 120,
        icon: "fa-user-shield"
    },

    {
        id: 39,
        phase: 5,
        category: "Security",
        title: "JWT",
        description: "JWT Structure, Header, Payload, Signature và Access Token.",
        duration: 120,
        icon: "fa-key"
    },

    {
        id: 40,
        phase: 5,
        category: "Security",
        title: "JWT Filter",
        description: "JWT Authentication Filter, SecurityContext và Authentication.",
        duration: 120,
        icon: "fa-filter"
    },

    {
        id: 41,
        phase: 5,
        category: "Security",
        title: "Refresh Token",
        description: "Access Token, Refresh Token và Token Expiration.",
        duration: 120,
        icon: "fa-rotate"
    },

    {
        id: 42,
        phase: 5,
        category: "Security",
        title: "Method Security",
        description: "@PreAuthorize, @Secured và phân quyền theo Method.",
        duration: 120,
        icon: "fa-user-lock"
    },

    {
        id: 43,
        phase: 5,
        category: "Project",
        title: "Mini Project Security",
        description: "Login, Register, Password Encoding, JWT, Role và Authorization.",
        duration: 120,
        icon: "fa-shield"
    },


    // ==================================================
    // PHASE 4 - MINI PROJECT 1 - RESTFUL API (Buổi 44 - 49)
    // ==================================================

    {
        id: 44,
        phase: 4,
        category: "Project",
        title: "Mini Project 1 - RESTful API - Phần 1",
        description: "Khởi tạo project Spring Boot, MySQL và xây dựng Entity.",
        duration: 120,
        icon: "fa-diagram-project"
    },

    {
        id: 45,
        phase: 4,
        category: "Project",
        title: "Mini Project 1 - RESTful API - Phần 2",
        description: "Xây dựng Repository, Service và Controller.",
        duration: 120,
        icon: "fa-code"
    },

    {
        id: 46,
        phase: 4,
        category: "Project",
        title: "Mini Project 1 - RESTful API - Phần 3",
        description: "CRUD API, DTO và Validation.",
        duration: 120,
        icon: "fa-server"
    },

    {
        id: 47,
        phase: 4,
        category: "Project",
        title: "Mini Project 1 - RESTful API - Phần 4",
        description: "Relationship, Search và Pagination.",
        duration: 120,
        icon: "fa-magnifying-glass"
    },

    {
        id: 48,
        phase: 4,
        category: "Project",
        title: "Mini Project 1 - RESTful API - Phần 5",
        description: "Exception Handling và hoàn thiện API.",
        duration: 120,
        icon: "fa-triangle-exclamation"
    },

    {
        id: 49,
        phase: 4,
        category: "Project",
        title: "Mini Project 1 - RESTful API - Phần 6",
        description: "Test API bằng Postman và hoàn thiện Mini Project.",
        duration: 120,
        icon: "fa-check-double"
    },


    // ==================================================
    // PHASE 6 - ADVANCED (Buổi 50 - 54)
    // ==================================================

    {
        id: 50,
        phase: 6,
        category: "Advanced",
        title: "Upload File & Email",
        description: "MultipartFile, Upload Image/File và Spring Mail.",
        duration: 120,
        icon: "fa-upload"
    },

    {
        id: 51,
        phase: 6,
        category: "Advanced",
        title: "AOP & Logging",
        description: "Spring AOP, Aspect và Logback.",
        duration: 120,
        icon: "fa-file-lines"
    },

    {
        id: 52,
        phase: 6,
        category: "Advanced",
        title: "Redis Cache",
        description: "Redis, Cache dữ liệu, @Cacheable và @CacheEvict.",
        duration: 120,
        icon: "fa-database"
    },

    {
        id: 53,
        phase: 6,
        category: "Advanced",
        title: "Scheduling, Async & Docker",
        description: "@Scheduled, @Async, Docker và Docker Compose.",
        duration: 120,
        icon: "fa-docker"
    },

    {
        id: 54,
        phase: 6,
        category: "Advanced",
        title: "Testing",
        description: "JUnit 5, Mockito, Unit Test và Integration Test.",
        duration: 120,
        icon: "fa-vial"
    },


    // ==================================================
    // PHASE 7 - ENTERPRISE PROJECT (Buổi 55 - 58)
    // ==================================================

    {
        id: 55,
        phase: 7,
        category: "Project",
        title: "Phân tích & Thiết kế dự án",
        description: "Requirement, phân tích nghiệp vụ, ERD, Database Design và API Design.",
        duration: 120,
        icon: "fa-diagram-project"
    },

    {
        id: 56,
        phase: 7,
        category: "Project",
        title: "Xây dựng Backend",
        description: "Spring Boot, JPA, DTO, Validation, Exception Handling và CRUD.",
        duration: 120,
        icon: "fa-code"
    },

    {
        id: 57,
        phase: 7,
        category: "Project",
        title: "Security & Chức năng nâng cao",
        description: "JWT, Role/Permission, Upload File, Email, Redis, Pagination và Search.",
        duration: 120,
        icon: "fa-shield-halved"
    },

    {
        id: 58,
        phase: 7,
        category: "Project",
        title: "Hoàn thiện & Deploy",
        description: "Testing, Docker, Docker Compose, API Documentation, Deploy và hoàn thiện Project.",
        duration: 120,
        icon: "fa-rocket"
    }

];


// ======================================================
// PHASE INFORMATION
// ======================================================

const phases = {

    1: {
        title: "Phase 1 · Java Core",
        range: "Lessons 1 → 10"
    },

    2: {
        title: "Phase 2 · SQL & Database",
        range: "Lessons 11 → 16"
    },

    3: {
        title: "Phase 3 · Java Web (Servlet & JSP)",
        range: "Lessons 17 → 23"
    },

    4: {
        title: "Phase 4 · Spring Boot Foundation",
        range: "Lessons 24 → 47"
    },

    5: {
        title: "Phase 5 · Spring Security & JWT",
        range: "Lessons 48 → 56"
    },

    6: {
        title: "Phase 6 · Advanced Spring Boot",
        range: "Lessons 57 → 61"
    },

    7: {
        title: "Phase 7 · Enterprise Project",
        range: "Lessons 62 → 65"
    }

};


// ======================================================
// LOCAL STORAGE
// ======================================================

let completedLessons =
    JSON.parse(
        localStorage.getItem("completedLessons")
    ) || [];


// ======================================================
// CURRENT FILTER
// ======================================================

let currentFilter = "All";
let currentKeyword = "";


// ======================================================
// RENDER LESSON
// ======================================================

function renderLesson(lesson) {

    const completed =
        completedLessons.includes(lesson.id);

    return `

        <div
            class="lesson-card ${completed ? "completed" : ""}"
            data-id="${lesson.id}"
        >

            <!-- LESSON NUMBER -->
            <div class="lesson-number">

                <span>
                    ${lesson.id}
                </span>

            </div>


            <!-- ICON -->
            <div class="lesson-icon">

                <i class="fa-solid ${lesson.icon}"></i>

            </div>


            <!-- CONTENT -->
            <div class="lesson-content">

                <div class="lesson-top">

                    <span class="lesson-category">
                        ${lesson.category}
                    </span>

                    <span class="lesson-duration">

                        <i class="fa-regular fa-clock"></i>

                        ${lesson.duration} phút

                    </span>

                </div>


                <h3>
                    ${lesson.title}
                </h3>




                <div class="lesson-bottom">

                    <!-- ==============================
                         VÀO BÀI HỌC
                         lesson-1.html
                         lesson-2.html
                         ...
                         lesson-65.html
                    =============================== -->

                    <a
                        href="lesson/${lesson.id}.html"
                        class="lesson-btn"
                    >

                        <i class="fa-solid fa-play"></i>

                        Vào bài học

                    </a>


                    <!-- ==============================
                         HOÀN THÀNH
                    =============================== -->

                    <button
                        type="button"
                        class="complete-btn"
                        onclick="toggleComplete(${lesson.id})"
                    >

                        <i class="fa-solid ${
                            completed
                                ? "fa-circle-check"
                                : "fa-circle"
                        }"></i>

                        ${
                            completed
                                ? "Đã hoàn thành"
                                : "Đánh dấu hoàn thành"
                        }

                    </button>

                </div>

            </div>

        </div>

    `;

}


// ======================================================
// GET FILTERED LESSONS
// ======================================================

function getFilteredLessons() {

    let result = [...lessons];


    // ==================================================
    // CATEGORY FILTER
    // ==================================================

    if (currentFilter !== "All") {

        result =
            result.filter(
                lesson =>
                    lesson.category === currentFilter
            );

    }


    // ==================================================
    // SEARCH
    // ==================================================

    if (currentKeyword !== "") {

        const keyword =
            currentKeyword.toLowerCase();


        result =
            result.filter(lesson => {

                return (

                    lesson.title
                        .toLowerCase()
                        .includes(keyword)

                    ||

                    lesson.description
                        .toLowerCase()
                        .includes(keyword)

                    ||

                    lesson.category
                        .toLowerCase()
                        .includes(keyword)

                );

            });

    }


    return result;

}


// ======================================================
// RENDER ALL PHASES
// ======================================================

function renderPhases() {

    const filteredLessons =
        getFilteredLessons();


    for (
        let phaseId = 1;
        phaseId <= 7;
        phaseId++
    ) {

        const container =
            document.getElementById(
                `phase${phaseId}`
            );


        if (!container) continue;


        const phaseLessons =
            filteredLessons.filter(
                lesson =>
                    lesson.phase === phaseId
            );


        if (phaseLessons.length > 0) {

            container.innerHTML =
                phaseLessons
                    .map(renderLesson)
                    .join("");

        } else {

            container.innerHTML = `

                <p class="no-result">
                    Không tìm thấy bài học.
                </p>

            `;

        }

    }

}


// ======================================================
// SEARCH
// ======================================================

const searchInput =
    document.getElementById("search");


if (searchInput) {

    searchInput.addEventListener(
        "input",
        function () {

            currentKeyword =
                this.value
                    .trim()
                    .toLowerCase();


            renderPhases();

        }
    );

}


// ======================================================
// FILTER
// ======================================================

const filterButtons =
    document.querySelectorAll(
        ".filter button"
    );


filterButtons.forEach(button => {

    button.addEventListener(
        "click",
        function () {

            // Xóa active cũ
            filterButtons.forEach(btn => {

                btn.classList.remove("active");

            });


            // Active button hiện tại
            this.classList.add("active");


            // Lấy filter
            currentFilter =
                this.textContent.trim();


            // Render
            renderPhases();

        }
    );

});


// ======================================================
// COMPLETE LESSON
// ======================================================

function toggleComplete(id) {

    const index =
        completedLessons.indexOf(id);


    if (index === -1) {

        completedLessons.push(id);

    } else {

        completedLessons.splice(index, 1);

    }


    localStorage.setItem(
        "completedLessons",
        JSON.stringify(completedLessons)
    );


    renderPhases();

    updateDashboard();

}


// ======================================================
// UPDATE DASHBOARD
// ======================================================

function updateDashboard() {

    const total =
        lessons.length;


    const completed =
        completedLessons.length;


    const percent =
        total > 0
            ? Math.round(
                (completed / total) * 100
            )
            : 0;


    const statCards =
        document.querySelectorAll(
            ".stat-card"
        );


    // ==================================================
    // PROGRESS
    // ==================================================

    if (statCards.length >= 1) {

        const progressTitle =
            statCards[0].querySelector("h2");


        const progressText =
            statCards[0].querySelector("p");


        if (progressTitle) {

            progressTitle.textContent =
                `${completed} / ${total} Lessons`;

        }


        if (progressText) {

            progressText.textContent =
                `${percent}% Completed`;

        }

    }


    // ==================================================
    // NEXT LESSON
    // ==================================================

    const nextLesson =
        lessons.find(
            lesson =>
                !completedLessons.includes(
                    lesson.id
                )
        );


    if (statCards.length >= 4) {

        const nextTitle =
            statCards[3].querySelector("h2");


        const nextText =
            statCards[3].querySelector("p");


        if (nextLesson) {

            if (nextTitle) {

                nextTitle.textContent =
                    `Lesson ${nextLesson.id}`;

            }


            if (nextText) {

                nextText.textContent =
                    nextLesson.title;

            }

        } else {

            if (nextTitle) {

                nextTitle.textContent =
                    "Completed";

            }


            if (nextText) {

                nextText.textContent =
                    "All Lessons Completed 🎉";

            }

        }

    }

}


// ======================================================
// UPDATE HERO LESSON COUNT
// ======================================================

function updateLessonCount() {

    const heroInfo =
        document.querySelector(
            ".hero-info"
        );


    if (!heroInfo) return;


    const firstInfo =
        heroInfo.querySelector("h4");


    if (firstInfo) {

        firstInfo.textContent =
            `${lessons.length} Lessons`;

    }

}


// ======================================================
// UPDATE HERO DESCRIPTION
// ======================================================

function updateHeroDescription() {

    const heroParagraph =
        document.querySelector(
            ".hero-left p"
        );


    if (!heroParagraph) return;


    heroParagraph.textContent =
        `Learn Java Core, SQL, Java Web, Spring Boot,
        Spring Security, JWT, Redis, Docker and build
        real-world enterprise applications through a
        structured ${lessons.length}-lesson roadmap.`;

}


// ======================================================
// INITIALIZE
// ======================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        renderPhases();

        updateDashboard();

        updateLessonCount();

        updateHeroDescription();

    }
);
