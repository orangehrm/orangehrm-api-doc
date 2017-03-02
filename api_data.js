define({ "api": [
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
            "field": "id",
            "description": "<p>Employee id</p>"
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
            "field": "name",
            "description": "<p>Name of the dependent.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "relationship",
            "description": "<p>Relationship of the dependent.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "dob",
            "description": "<p>Date of birth of the dependent.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "seqNumber",
            "description": "<p>Sequence number of the dependent.</p>"
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
    "title": "Employee Detail",
    "name": "GetEmployeeDetail",
    "group": "Employee",
    "version": "0.1.0",
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
            "field": "firstName",
            "description": "<p>First name of the employee.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "middleName",
            "description": "<p>Middle name of the employee.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>Last Name of the employee.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the employee.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Employee code.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fullName",
            "description": "<p>Full Name of the employee.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the employee.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "dob",
            "description": "<p>DOB of the employee.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "driversLicenseNumber",
            "description": "<p>Employee driver's license number.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "licenseExpiryDare",
            "description": "<p>Employee driver's license expiry date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "maritalStatus",
            "description": "<p>Employee marital status.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>Gender of the employee.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "otherId",
            "description": "<p>Employee other id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nationality",
            "description": "<p>Nationality of the employee.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "jobTitle",
            "description": "<p>Employee job title.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "unit",
            "description": "<p>Employee sub unit.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "supervisor",
            "description": "<p>Employee supervisor details.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n  {\n    \"data\":\n    {\n        \"firstName\": \"Nina\",\n        \"middleName\": \"Jane\",\n         \"lastName\": \"Lewis\",\n         \"code\": \"0014\",\n         \"id\": \"1\",\n         \"fullName\": \"Nina Jane Lewis (Past Employee)\",\n         \"status\": \"Active\",\n         \"dob\": \"2016-05-04\",\n         \"driversLicenseNumber\": \"444555124223\",\n         \"licenseExpiryDate\": \"2017-02-09\",\n         \"maritalStatus\": \"Married\",\n         \"gender\": \"2\",\n         \"otherId\": \"4646522\",\n         \"nationality\": \"Armenian\",\n         \"unit\": \"Marketing Unit\",\n         \"jobTitle\": \"marketing\",\n\n       \"supervisor\": [\n                       []\n                      ]\n    },\n  \"rels\": {\n    \"contact-detail\": \"/employee/:id/contact-detail\",\n    \"supervisor\": \"/employee/:id/supervisor\",\n    \"job-detail\": \"/employee/:id/job-detail\",\n    \"dependent\": \"/employee/:id/dependent\"\n  }\n}",
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
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/2-employee-end-point.php",
    "groupTitle": "Employee"
  },
  {
    "type": "get",
    "url": "/employee/:id/job-detail",
    "title": "Employee Job Detail",
    "name": "GetEmployeeJobDetails",
    "group": "Employee",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee id</p>"
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
            "description": "<p>Job title name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Job category.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Employee job status.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "subunit",
            "description": "<p>Subunit of the employee.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>Job location of the employee.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "joinedDate",
            "description": "<p>Employee joined date.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "startDate",
            "description": "<p>Employee contract start date.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "endDate",
            "description": "<p>Employee contract end date.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n  {\n    \"data\":\n    {\n        \"title\": \"Web Developer\",\n        \"category\": \"Engineering\",\n        \"status\": \"Active\",\n        \"joinedDate\": \"2001-01-12\",\n        \"subunit\": \"Marketing Unit\",\n        \"location\": Eng Dept,\n        \"startDate\": \"2001-02-01\",\n        \"endDate\": \"2005-02-01\"\n    },\n  \"rels\": {\n  }\n}",
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
    "type": "post",
    "url": "/employee/:id/job-detail",
    "title": "Save Employee Job Detail",
    "name": "SaveEmployeeJobDetails",
    "group": "Employee",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Job title name .</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Job category.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Employee job status.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subunit",
            "description": "<p>Subunit of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>Job location of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "joinedDate",
            "description": "<p>Employee joined date.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "startDate",
            "description": "<p>Employee contract start date.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endDate",
            "description": "<p>Employee contract end date.</p>"
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
            "field": "Object",
            "description": "<p>data success response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n {\n   \"success\": \"Successfully saved\"\n }",
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
            "field": "Bad-Response",
            "description": "<p>Saving failed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n  \"error\": [\"Saving failed\"]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Invalid Parameter\n{\n  \"error\": [\"invalid Parameter\"]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/save-employee-job-detail-end-point.php",
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
            "description": "<p>employee name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "id",
            "description": "<p>employee Id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "status",
            "description": "<p>employee status.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "supervisor",
            "description": "<p>supervisor name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "jobtitle",
            "description": "<p>employee job title.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "unit",
            "description": "<p>Employee Unit.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "dob",
            "description": "<p>employee birth day.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "gender",
            "description": "<p>employee gender.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "description": "<p>record limit.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>pagination number.</p>"
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
            "description": "<p>Matching Employee list.</p>"
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
          "content": "HTTP/1.1 200 OK\n\n  {\n    \"data\":[\n    {\n        \"id\": \"1\",\n        \"employeeNumber\": \"001\",\n        \"firstName\": \"John\",\n        \"lastName\": \"Doe\",\n        \"middleName\": \"\",\n        \"fullName\": \"John Doe\",\n        \"status\": \"active\",\n        \"jobTitle\": \"web developer\",\n        \"supervisor\": \"Mike com\",\n        \"supervisorId\": \"2\",\n        \"dob\": \"1989-09-7\",\n        \"unit\": \"development\",\n        \"gender\": \"M\"\n    },\n    {\n        \"id\": \"002\",\n        \"employeeNumber\": \"001\",\n        \"firstName\": \"John\",\n        \"lastName\": \"Mass\",\n        \"middleName\": \"\",\n        \"fullName\": \"John Mass\",\n        \"status\": \"active\",\n        \"jobTitle\": \"web developer\",\n        \"supervisor\": \"Simon English\",\n        \"supervisorId\": \"2\",\n        \"dob\": \"1989-09-7\",\n        \"unit\": \"development\",\n        \"gender\": \"M\"\n    }\n  ],\n  \"rels\": {\n    \"next\": \"/employee/search?page=3\",\n    \"previous\": \"/employee/search?page=1\"\n  }\n}",
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
  },
  {
    "type": "put",
    "url": "/employee/:id",
    "title": "Update Employee Detail",
    "name": "UpdateEmployeeDetails",
    "group": "Employee",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "employee",
            "description": "<p>id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>First name of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "middleName",
            "description": "<p>Middle name of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>Last Name of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Employee code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fullName",
            "description": "<p>Full Name of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dob",
            "description": "<p>DOB of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "driversLicenseNumber",
            "description": "<p>Employee driver's license number.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "licenseExpiryDare",
            "description": "<p>Employee driver's license expiry date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "maritalStatus",
            "description": "<p>Employee marital status.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>Gender of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "otherId",
            "description": "<p>Employee other id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nationality",
            "description": "<p>Nationality of the employee.</p>"
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
            "field": "Object",
            "description": "<p>data success response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n {\n   \"success\": \"Successfully saved\"\n }",
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
            "field": "Bad-Response",
            "description": "<p>Saving failed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": [\"Saving failed\"]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 202 Invalid Parameter\n{\n  \"error\": [\"invalid Parameter\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/3-update-employee-end-point.php",
    "groupTitle": "Employee"
  },
  {
    "type": "del",
    "url": "/employee/:id/dependent",
    "title": "Delete Employee Dependents",
    "name": "deleteEmployeeDependents",
    "group": "Employee",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee number</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "sequenceNumber",
            "description": "<p>Mandatory sequence number of the dependent.</p>"
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
            "description": "<p>success response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n {\n   \"success\": \"Successfully deleted\"\n }",
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
            "field": "Bad-Response",
            "description": "<p>Saving failed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": [\"Deleting failed\"]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": [\"Deleting failed\"]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/delete-employee-dependents-end-point.php",
    "groupTitle": "Employee"
  },
  {
    "type": "get",
    "url": "/employee/:id/contact-detail",
    "title": "Employee Contact Detail",
    "name": "getEmployeeContactDetails",
    "group": "Employee",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee number</p>"
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
            "field": "fullName",
            "description": "<p>Employee full name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Employee id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Employee number.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "addressStreet1",
            "description": "<p>Address street 1 of the employee.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "addressStreet2",
            "description": "<p>Address street 2 of the employee.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>City of the employee.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>State of the employee.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "zip",
            "description": "<p>Zip code of the employee.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>Country of the employee.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "homeTelephone",
            "description": "<p>Home telephone number of the employee.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>Mobile number of the employee.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "workTelephone",
            "description": "<p>Work telephone number of the employee.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "workEmail",
            "description": "<p>Work email of the employee.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "otherEmail",
            "description": "<p>Other email of the employee.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n  {\n    \"data\":\n    {\n        \"id\": \"001\",\n        \"empNumber\": \"1\",\n        \"fullName\": \"Nina Jane Lewis\",\n        \"addressStreet1\": \"No 35 Park street ,Devmore canada\",\n        \"addressStreet2\": \"No 40 River view Devmore\",\n        \"city\": \"Devmore\",\n        \"state\": \"Western\",\n        \"zip\": \"15224\",\n        \"country\": \"Canada\",\n        \"homeTelephone\": \"154475426\",\n        \"workTelephone\": \"01244545144545\",\n        \"mobile\": \"1204415552\",\n        \"workEmail\": \"nina@orangehrmlive.com\",\n        \"otherEmail\": \"ninalewis@yahoo.com\"\n    },\n  \"rels\": {\n  }\n}",
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
    "type": "post",
    "url": "/employee/:id",
    "title": "Save Employee",
    "name": "saveEmployee",
    "group": "Employee",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "employee",
            "description": "<p>id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>Mandatory First name of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "middleName",
            "description": "<p>Middle name of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lstName",
            "description": "<p>Mandatory Last name of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Employee code.</p>"
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
            "description": "<p>success response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n {\n   \"success\": \"Successfully saved\",\n   \"id\": \"0011\"\n }",
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
            "field": "Bad-Response",
            "description": "<p>Saving failed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 40 Bad Request\n{\n  \"error\": [\"Saving failed\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/1-save-employee-end-point.php",
    "groupTitle": "Employee"
  },
  {
    "type": "post",
    "url": "/employee/:id/contact-detail",
    "title": "Save Employee Contact Detail",
    "name": "saveEmployeeContactDetails",
    "group": "Employee",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "addressStreet1",
            "description": "<p>Address street 1 of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "addressStreet2",
            "description": "<p>Address street 2 of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>City of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>State of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "zip",
            "description": "<p>Zip code of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>Country of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "homeTelephone",
            "description": "<p>Home telephone number of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>Mobile number of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "workTelephone",
            "description": "<p>Work telephone number of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "workEmail",
            "description": "<p>Work email of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "otherEmail",
            "description": "<p>Other email of the employee.</p>"
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
            "description": "<p>success response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n {\n   \"success\": \"Successfully saved\"\n }",
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
            "field": "Bad-Response",
            "description": "<p>Saving failed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": [\"Saving failed\"]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/save-employee-contact-end-point.php",
    "groupTitle": "Employee"
  },
  {
    "type": "post",
    "url": "/employee/:id/dependent",
    "title": "Save Employee Dependent",
    "name": "saveEmployee_dependents",
    "group": "Employee",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Mandatory name of the dependent.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "relationship",
            "description": "<p>Mandatory relationship of the dependent.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dob",
            "description": "<p>DOB of dependent.</p>"
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
            "description": "<p>success response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n {\n   \"success\": \"Successfully saved\",\n   \"sequenceNumber\": 1\n }",
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
            "field": "Bad-Response",
            "description": "<p>Saving failed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": [\"Saving failed\"]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 202 Invalid Parameter\n{\n  \"error\": [\"invalid Parameter\"]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/save-employee-dependents-end-point.php",
    "groupTitle": "Employee"
  },
  {
    "type": "post",
    "url": "employee/:id/action/terminate",
    "title": "Terminate Employment",
    "name": "terminateEmployee",
    "group": "Employee",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "employee",
            "description": "<p>id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "TerminationDate",
            "description": "<p>Mandatory termination date.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Reason",
            "description": "<p>Mandatory termination reason.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "note",
            "description": "<p>Termination note.</p>"
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
            "description": "<p>success response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n {\n   \"success\": \"Successfully terminated\"\n }",
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
            "field": "Bad-Response",
            "description": "<p>Saving failed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": [\"Termination failed\"]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 202 Invalid Parameter\n{\n  \"error\": [\"invalid Parameter\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/4-terminate-employee-end-point.php",
    "groupTitle": "Employee"
  },
  {
    "type": "put",
    "url": "/employee/:id/contact-detail",
    "title": "Update Employee Contact Detail",
    "name": "updateEmployeeContactDetails",
    "group": "Employee",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "addressStreet1",
            "description": "<p>Address street 1 of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "addressStreet2",
            "description": "<p>Address street 2 of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>City of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>State of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "zip",
            "description": "<p>Zip code of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>Country of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "homeTelephone",
            "description": "<p>Home telephone number of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>Mobile number of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "workTelephone",
            "description": "<p>Work telephone number of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "workEmail",
            "description": "<p>Work email of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "otherEmail",
            "description": "<p>Other email of the employee.</p>"
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
            "description": "<p>success response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n {\n   \"success\": \"Successfully updated\"\n }",
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
            "field": "Bad-Response",
            "description": "<p>Updating failed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": [\"Updating failed\"]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/update-employee-contact-details-end-point.php",
    "groupTitle": "Employee"
  },
  {
    "type": "put",
    "url": "/employee/:id/dependent",
    "title": "Update Employee Dependents",
    "name": "updateEmployeeDependents",
    "group": "Employee",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the dependent.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "relationship",
            "description": "<p>relationship of the dependent.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dob",
            "description": "<p>DOB of dependent.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sequenceNumber",
            "description": "<p>Mandatory sequence number.</p>"
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
            "description": "<p>success response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n {\n   \"success\": \"Successfully deleted\"\n }",
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
            "field": "Bad-Response",
            "description": "<p>Saving failed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n  \"error\": [\"updating failed\"]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Invalid Parameter\n{\n  \"error\": [\"invalid Parameter\"]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/update-employee-dependents-end-point.php",
    "groupTitle": "Employee"
  },
  {
    "type": "put",
    "url": "/employee/:id/job-detail",
    "title": "Update Employee Job Detail",
    "name": "updateEmployeeJobDetails",
    "group": "Employee",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Job title name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Job category.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Employee job status.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subunit",
            "description": "<p>Subunit of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>Job location of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "joinedDate",
            "description": "<p>Employee joined date.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "startDate",
            "description": "<p>Employee contract start date.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endDate",
            "description": "<p>Employee contract end date.</p>"
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
            "field": "Object",
            "description": "<p>data success response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n {\n   \"success\": \"Successfully saved\"\n }",
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
            "field": "Bad-Response",
            "description": "<p>Saving failed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": [\"Saving failed\"]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 202 Invalid Parameter\n{\n  \"error\": [\"invalid Parameter\"]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/update-employee-job-detail-end-point.php",
    "groupTitle": "Employee"
  }
] });
