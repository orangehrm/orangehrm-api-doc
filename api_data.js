define({ "api": [
  {
    "type": "get",
    "url": "/employee/:id/contact-detail",
    "title": "Employee Contact detail",
    "name": "GetEmployeeContactDetails",
    "group": "Employee",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "employee",
            "description": "<p>id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the employee.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the employee.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>address of the employee.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the employee.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>phone of the employee.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n  {\n    \"data\":\n    {\n        \"id\": \"001\",\n        \"fullName\": \"John Doe\",\n        \"telephone\": \"03131238\",\n        \"email\": \"test@example.com\",\n        \"address\": \"17 Clifford Rd, Wellington\",\n        \"country\": \"New Zealand\"\n    },\n  \"rels\": {\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the employee was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"EmployeeNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/employee-contact-end-point.php",
    "groupTitle": "Employee"
  },
  {
    "type": "get",
    "url": "/employee/:id/supervisor",
    "title": "Employee Contact detail",
    "name": "GetEmployeeContactDetails",
    "group": "Employee",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "employee",
            "description": "<p>id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "supervisors",
            "description": "<p>employee Supervisors</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n  {\n    \"data\": [\n      {\n        \"Id\": \"001\",\n        \"fullName\": \"John Doe\",\n        \"reportingMethod\": \"direct\"\n      },\n      {\n        \"Id\": \"002\",\n        \"fullName\": \"John Max\",\n        \"reportingMethod\": \"Indirect\"\n      },\n   ],\n  \"rels\": {\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the employee was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"EmployeeNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/employee-supervisor-end-point.php",
    "groupTitle": "Employee"
  },
  {
    "type": "get",
    "url": "/employee/:id/dependent",
    "title": "Employee Dependents",
    "name": "GetEmployeeDependents",
    "group": "Employee",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "employee",
            "description": "<p>id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "employee",
            "description": "<p>dependents.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n  {\n    \"data\":[\n     {\n        \"name\": \"Inu Lim\",\n        \"relationship\": \"Daughter\",\n        \"dob\": \"1989-09-02\"\n     },\n     {\n        \"name\": \"Sam Lim\",\n        \"relationship\": \"Daughter\",\n        \"dob\": \"2009-09-02\"\n     }\n    ],\n  \"rels\": {\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the employee was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"EmployeeNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/employee-dependent-end-point.php",
    "groupTitle": "Employee"
  },
  {
    "type": "get",
    "url": "/employee/:id",
    "title": "Employee detail",
    "name": "GetEmployeeDetail",
    "group": "Employee",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "employee",
            "description": "<p>id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the employee.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the employee.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>gender of the employee.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>title of the employee.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n  {\n    \"data\":\n    {\n        \"id\": \"001\",\n        \"firstName\": \"John\",\n        \"lastName\": \"Doe\",\n        \"middleName\": \"\",\n        \"fullName\": \"John Doe\",\n        \"status\": \"active\",\n        \"jobtitle\": \"web developer\",\n        \"supervisor\": \"Mike com\",\n        \"supervisorId\": \"2\",\n        \"dob\": \"1989-09-7\",\n        \"unit\": \"development\",\n        \"gender\": \"M\"\n    },\n  \"rels\": {\n    \"contact-detail\": \"/employee/:id/contact-detail\",\n    \"supervisor\": \"/employee/:id/supervisor\",\n    \"job-detail\": \"/employee/:id/job-detail\",\n    \"dependent\": \"/employee/:id/dependent\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the employee was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"EmployeeNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/employee-end-point.php",
    "groupTitle": "Employee"
  },
  {
    "type": "get",
    "url": "/employee/:id/job-detail",
    "title": "Employee Job detail",
    "name": "GetEmployeeJobDetails",
    "group": "Employee",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "employee",
            "description": "<p>id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Firstname of the employee.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Lastname of the employee.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "joinedDate",
            "description": "<p>address of the employee.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "startDate",
            "description": "<p>email of the employee.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "endDate",
            "description": "<p>phone of the employee.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n  {\n    \"data\":\n    {\n        \"title\": \"Web Developer\",\n        \"category\": \"Engineering\",\n        \"joinedDate\": \"2001-01-12\",\n        \"startDate\": \"2001-02-01\",\n        \"endDate\": \"2005-02-01\"\n    },\n  \"rels\": {\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the employee was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"EmployeeNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/employee-job-detail-end-point.php",
    "groupTitle": "Employee"
  },
  {
    "type": "get",
    "url": "/employee/search",
    "title": "Employee Search",
    "name": "SearchEmployee",
    "group": "Employee",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>employee name</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "id",
            "description": "<p>employee Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "status",
            "description": "<p>employee status</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "supervisor",
            "description": "<p>supervisor name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "jobtitle",
            "description": "<p>employee job title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "unit",
            "description": "<p>Employee Unit</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "dob",
            "description": "<p>employee birth day</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "gender",
            "description": "<p>employee gender</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "description": "<p>record limit</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Matching Employee list</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "rels",
            "description": "<p>API relations.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n  {\n    \"data\":[\n    {\n        \"id\": \"001\",\n        \"firstName\": \"John\",\n        \"lastName\": \"Doe\",\n        \"middleName\": \"\",\n        \"fullName\": \"John Doe\",\n        \"status\": \"active\",\n        \"jobtitle\": \"web developer\",\n        \"supervisor\": \"Mike com\",\n        \"supervisorId\": \"2\",\n        \"dob\": \"1989-09-7\",\n        \"unit\": \"development\",\n        \"gender\": \"M\"\n    },\n    {\n        \"id\": \"002\",\n        \"firstname\": \"John\",\n        \"lastname\": \"Mass\",\n        \"middleName\": \"\",\n        \"fullName\": \"John Mass\",\n        \"status\": \"active\",\n        \"jobtitle\": \"web developer\",\n        \"supervisor\": \"Simon English\",\n        \"supervisorId\": \"2\",\n        \"dob\": \"1989-09-7\",\n        \"unit\": \"development\",\n        \"gender\": \"M\"\n    }\n  ],\n  \"rels\": {\n    \"next\": \"/employee/search?page=3\",\n     \"previous\": \"/employee/search?page=1\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EmployeeNotFound.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"EmployeeNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/employee-search-end-point.php",
    "groupTitle": "Employee"
  }
] });
