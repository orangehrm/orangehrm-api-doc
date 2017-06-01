define({ "api": [
  {
    "type": "get",
    "url": "/user",
    "title": "1.Get Users",
    "name": "getUsers",
    "group": "Admin",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "offset",
            "description": "<p>Page number.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Number of results per page.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userType",
            "description": "<p>User type.</p>"
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
            "field": "userName",
            "description": "<p>User Name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "employeeName",
            "description": "<p>Employee name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userRole",
            "description": "<p>User role.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>User status</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n\n\t\t{\n\t\t    \"data\":[\n\t\t\t{\n\t\t\t    \"userName\":\"hameesh\",\n\t\t\t    \"userRole\":\"ESS\",\n\t\t\t    \"status\":\"Enabled\",\n\t\t\t    \"employeeName\":\"Hameesh Von Johnson\"\n\t\t\t},\n\t\t\t{\n\t\t\t    \"userName\":\"nina123\",\n\t\t\t    \"userRole\":\"ESS\",\n\t\t\t    \"status\":\"Enabled\",\n\t\t\t    \"employeeName\":\"Nina Jane Lewis\"\n\t\t\t},\n\t\t\t{\n\t\t\t    \"userName\":\"shawn\",\n\t\t\t    \"userRole\":\"ESS\",\n\t\t\t    \"status\":\"Enabled\",\n\t\t\t    \"employeeName\":\"Shawn haffman\"\n\t\t\t}\n\t\t    ],\n\t\t    \"rels\":[\n\n\t\t    ]\n\t\t}",
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
            "field": "No-Records",
            "description": "<p>Found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Record Not Found\n{\n  \"error\": [\"No Users Found\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/get-users-end-point.php",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/login",
    "title": "2.User Login",
    "name": "userLogin",
    "group": "Admin",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "password",
            "description": "<p>User password.</p>"
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
            "field": "login",
            "description": "<p>User login ( true or false ).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>User Name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "employeeName",
            "description": "<p>Employee name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "employeeId",
            "description": "<p>Employee id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userRole",
            "description": "<p>User role.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>User status.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n\n\t\t{\n\t\t  \"login\": true,\n\t\t  \"user\": {\n\t\t    \"userName\": \"Admin\",\n\t\t    \"userRole\": \"Admin\",\n\t\t    \"status\": \"Enabled\",\n\t\t    \"employeeName\": \"\"\n          \"employeeId\": \"\"\n\t\t  }\n\t\t}",
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
            "field": "InvalidParameter",
            "description": "<p>Found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Invalid Parameter\n{\n  \"error\": [\"Credentials Are Wrong Please Try Again\"]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 501 Bad Request\n{\n  \"error\": [\"Login Failed\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/user-login-end-point.php",
    "groupTitle": "Admin"
  },
  {
    "type": "get",
    "url": "/employee/:id/dependent",
    "title": "09.Employee Dependents",
    "name": "GetEmployeeDependents",
    "group": "Employee",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee id.</p>"
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
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Employee Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/9-employee-dependent-end-point.php",
    "groupTitle": "Employee"
  },
  {
    "type": "get",
    "url": "/employee/:id",
    "title": "02.Employee Detail",
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
            "field": "id",
            "description": "<p>Employee id.</p>"
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
            "type": "Number",
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
          "content": "HTTP/1.1 200 OK\n\n  {\n    \"data\":\n    {\n        \"firstName\": \"Nina\",\n        \"middleName\": \"Jane\",\n         \"lastName\": \"Lewis\",\n         \"code\": \"0014\",\n         \"id\": \"1\",\n         \"fullName\": \"Nina Jane Lewis (Past Employee)\",\n         \"status\": \"Active\",\n         \"dob\": \"2016-05-04\",\n         \"driversLicenseNumber\": \"444555124223\",\n         \"licenseExpiryDate\": \"2017-02-09\",\n         \"maritalStatus\": \"Married\",\n         \"gender\": \"2\",\n         \"otherId\": \"4646522\",\n         \"nationality\": \"Armenian\",\n         \"unit\": \"Marketing Unit\",\n         \"jobTitle\": \"marketing\",\n\n       \"supervisor\": [\n                      {\n                        \"name\": \"Hameesh Von Johnson\",\n                        \"id\": \"3\"\n                       }\n                      ]\n    },\n  \"rels\": {\n    \"contact-detail\": \"/employee/:id/contact-detail\",\n    \"supervisor\": \"/employee/:id/supervisor\",\n    \"job-detail\": \"/employee/:id/job-detail\",\n    \"dependent\": \"/employee/:id/dependent\"\n  }\n}",
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
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Employee Not Found\"\n}",
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
    "title": "13.Employee Job Detail",
    "name": "GetEmployeeJobDetails",
    "group": "Employee",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee id.</p>"
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
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Employee Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/13-employee-job-detail-end-point.php",
    "groupTitle": "Employee"
  },
  {
    "type": "post",
    "url": "/employee/:id/job-detail",
    "title": "14.Save Employee Job Detail",
    "name": "SaveEmployeeJobDetails",
    "group": "Employee",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "title",
            "description": "<p>Job title id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "category",
            "description": "<p>Job category id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>Employee job status id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "subunit",
            "description": "<p>Subunit id of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "location",
            "description": "<p>Job location id of the employee.</p>"
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
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n {\n   \"success\": \"Successfully Saved\"\n }",
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
            "description": "<p>Saving Failed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n  \"error\": [\"Saving Failed\"]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Invalid Parameter\n{\n  \"error\": [\"Invalid Parameter\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/14-save-employee-job-detail-end-point.php",
    "groupTitle": "Employee"
  },
  {
    "type": "get",
    "url": "/employee/search",
    "title": "05.Employee Search",
    "name": "SearchEmployee",
    "group": "Employee",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>Employee name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>Employee code.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "status",
            "description": "<p>Employee status id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "supervisor",
            "description": "<p>Supervisor name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "jobTitle",
            "description": "<p>Employee job title id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "unit",
            "description": "<p>Employee Unit id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "dob",
            "description": "<p>Employee birth day.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "include",
            "description": "<p>Include Termination ( TERMINATED_ONLY , WITHOUT_TERMINATED ,TERMINATED_ONLY )</p>"
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
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n  {\n    \"data\":[\n    {\n        \"firstName\": \"Nina\",\n        \"middleName\": \"Jane\",\n         \"lastName\": \"Lewis\",\n         \"code\": \"0014\",\n         \"id\": \"1\",\n         \"fullName\": \"Nina Jane Lewis\",\n         \"status\": \"Active\",\n         \"dob\": \"2016-05-04\",\n         \"driversLicenseNumber\": \"444555124223\",\n         \"licenseExpiryDate\": \"2017-02-09\",\n         \"maritalStatus\": \"Married\",\n         \"gender\": \"2\",\n         \"otherId\": \"45\",\n         \"nationality\": \"Armenian\",\n         \"unit\": \"Marketing Unit\",\n         \"jobTitle\": \"marketing\",\n\n       \"supervisor\": [\n                      {\n                        \"name\": \"Hameesh Von Johnson\",\n                        \"id\": \"3\"\n                       }\n                      ]\n    },\n    {\n        \"firstName\": \"Nina\",\n        \"middleName\": \"Shane\",\n         \"lastName\": \"Lewis\",\n         \"code\": \"0014\",\n         \"id\": \"1\",\n         \"fullName\": \"Nina Jane Lewis (Past Employee)\",\n         \"status\": \"Active\",\n         \"dob\": \"2016-05-04\",\n         \"driversLicenseNumber\": \"444555124223\",\n         \"licenseExpiryDate\": \"2017-02-09\",\n         \"maritalStatus\": \"Married\",\n         \"gender\": \"2\",\n         \"otherId\": \"4646522\",\n         \"nationality\": \"Armenian\",\n         \"unit\": \"Marketing Unit\",\n         \"jobTitle\": \"marketing\",\n\n       \"supervisor\": [\n                      {\n                        \"name\": \"Hameesh Von Johnson\",\n                        \"id\": \"3\"\n                       }\n                      ]\n    },\n  ],\n  \"rels\": {\n\n  }\n}",
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
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Employee Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/5.employee-search-end-point.php",
    "groupTitle": "Employee"
  },
  {
    "type": "put",
    "url": "/employee/:id",
    "title": "03.Update Employee Detail",
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
            "field": "id",
            "description": "<p>Employee id.</p>"
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
            "field": "dob",
            "description": "<p>DOB of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "licenseNumber",
            "description": "<p>Employee driver's license number.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "licenseNumberExpDate",
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
            "description": "<p>Gender of the employee (M-Male/F-Female).</p>"
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
            "description": "<p>Data Success response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n {\n   \"success\": \"Successfully Saved\"\n }",
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
            "description": "<p>Saving Failed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": [\"Saving Failed\"]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 202 Invalid Parameter\n{\n  \"error\": [\"Invalid Parameter\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/3-update-employee-end-point.php",
    "groupTitle": "Employee"
  },
  {
    "type": "del",
    "url": "/employee/:id/custom-field",
    "title": "31.Delete Employee Custom Field",
    "name": "deleteEmployeeCustomField",
    "group": "Employee",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "fieldId",
            "description": "<p>Field id.</p>"
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
            "field": "Data",
            "description": "<p>Success response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n\n{\n\n\"success\":\"Successfully Deleted\",\n\n}",
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
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CustomFieldNotFound",
            "description": "<p>The id of the custom field was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Employee Not Found\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Custom Field Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/31-delete-employee-custom-field-end-point.php",
    "groupTitle": "Employee"
  },
  {
    "type": "del",
    "url": "/employee/:id/dependent",
    "title": "10.Delete Employee Dependents",
    "name": "deleteEmployeeDependents",
    "group": "Employee",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
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
            "field": "Data",
            "description": "<p>Success response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n {\n   \"success\": \"Successfully Deleted\"\n }",
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
            "description": "<p>Saving Failed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": [\"Deleting Failed\"]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": [\"Deleting Failed\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/10-delete-employee-dependents-end-point.php",
    "groupTitle": "Employee"
  },
  {
    "type": "del",
    "url": "/employee/:id/education",
    "title": "27.Delete Employee Education",
    "name": "deleteEmployeeEducation",
    "group": "Employee",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "seqId",
            "description": "<p>Education record id.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n\n{\n\n\"success\":\"Successfully Deleted\",\n\"seqId\":3\n\n}",
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
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RecordNotFound",
            "description": "<p>The id of the record was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Employee Not Found\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Employee Education Record Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/27-delete-employee-education-end-point.php",
    "groupTitle": "Employee"
  },
  {
    "type": "del",
    "url": "/employee/:id/supervisor",
    "title": "18.Delete Supervisor Details",
    "name": "deleteEmployeeSupervisor",
    "group": "Employee",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "supervisorId",
            "description": "<p>Supervisor id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "reportingMethod",
            "description": "<p>Reporting method to the supervisor.</p>"
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
            "field": "Data",
            "description": "<p>Success response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n {\n   \"success\": \"Successfully Deleted\"\n }",
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
            "description": "<p>Saving Failed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": [\"Supervisor Not Found\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/18-delete-employee-supervisor-detail-end-point.php",
    "groupTitle": "Employee"
  },
  {
    "type": "del",
    "url": "/employee/:id/work-experience",
    "title": "24.Delete Employee Work Experience",
    "name": "deleteEmployeeWorkExperience",
    "group": "Employee",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "seqId",
            "description": "<p>Work experience record id.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n\n{\n\n\"success\":\"Successfully Deleted\"\n\n}",
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
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RecordNotFound",
            "description": "<p>The id of the record was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Employee Not Found\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Work Experience Record Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/24-delete-employee-work-Experience-end-point.php",
    "groupTitle": "Employee"
  },
  {
    "type": "get",
    "url": "/custom-field",
    "title": "32.Custom Field",
    "name": "getCustomField",
    "group": "Employee",
    "version": "0.1.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Field id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Field name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Field type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "screen",
            "description": "<p>Applicable screen.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "extraData",
            "description": "<p>Extra data.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Data",
            "description": "<p>Success response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n\n\t\t{\n\t\t  \"data\": [\n\t\t    {\n\t\t      \"id\": \"4\",\n\t\t      \"name\": \"Course\",\n\t\t      \"type\": \"Drop Down\",\n\t\t      \"screen\": \"personal\",\n\t\t      \"extraData\": \"Bsc,Msc,PostGrad\"\n\t\t    },\n\t\t    {\n\t\t      \"id\": \"3\",\n\t\t      \"name\": \"GPA\",\n\t\t      \"type\": \"Text or Number\",\n\t\t      \"screen\": \"personal\",\n\t\t      \"extraData\": null\n\t\t    }\n\t\t  ]\n\t\t }",
          "type": "json"
        }
      ]
    },
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/32-get-custom-field-end-point.php",
    "groupTitle": "Employee"
  },
  {
    "type": "get",
    "url": "/employee/:id/contact-detail",
    "title": "06.Employee Contact Detail",
    "name": "getEmployeeContactDetails",
    "group": "Employee",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee id.</p>"
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
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee id.</p>"
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
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Employee Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/6-employee-contact-end-point.php",
    "groupTitle": "Employee"
  },
  {
    "type": "get",
    "url": "/employee/:id/custom-field",
    "title": "28.Employee Custom Field",
    "name": "getEmployeeCustomField",
    "group": "Employee",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Field id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Field name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Field type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "screen",
            "description": "<p>Applicable screen.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>Field value.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Data",
            "description": "<p>Success response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n\n\t\t{\n\t\t  \"data\": [\n\t\t    {\n\t\t      \"id\": \"4\",\n\t\t      \"name\": \"Course\",\n\t\t      \"type\": \"Drop Down\",\n\t\t      \"screen\": \"personal\",\n\t\t      \"value\": \"Bsc\"\n\t\t    },\n\t\t    {\n\t\t      \"id\": \"3\",\n\t\t      \"name\": \"GPA\",\n\t\t      \"type\": \"Text or Number\",\n\t\t      \"screen\": \"personal\",\n\t\t      \"value\": 3.6\n\t\t    },\n\t\t    {\n\t\t      \"id\": \"2\",\n\t\t      \"name\": \"school\",\n\t\t      \"type\": \"Text or Number\",\n\t\t      \"screen\": \"dependents\",\n\t\t      \"value\": \"Prince Of Wales\"\n\t\t    },\n\t\t    {\n\t\t      \"id\": \"1\",\n\t\t      \"name\": \"University Name\",\n\t\t      \"type\": \"Text or Number\",\n\t\t      \"screen\": \"personal\",\n\t\t      \"value\": \"University Of Moratuwa\"\n\t\t    }\n\t\t  ]\n\t\t }",
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
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Employee Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/28-get-employee-custom-field-end-point.php",
    "groupTitle": "Employee"
  },
  {
    "type": "get",
    "url": "/employee/:id/education",
    "title": "25.Employee Education",
    "name": "getEmployeeEducation",
    "group": "Employee",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "level",
            "description": "<p>Education level id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "seqId",
            "description": "<p>Education record id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "institute",
            "description": "<p>Institute of studying.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "fromDate",
            "description": "<p>Start date.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "toDate",
            "description": "<p>End date.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "specialization",
            "description": "<p>Specialization.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "year",
            "description": "<p>Year of study.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gpa",
            "description": "<p>Gpa/score.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Data",
            "description": "<p>Success response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n\n\t\t{\n\t\t  \"data\": [\n\t\t    {\n\t\t      \"seqId\": \"1\",\n\t\t      \"level\": \"Graduate\",\n\t\t      \"institute\": \"\",\n\t\t      \"specialization\": \"batsmen\",\n\t\t      \"year\": \"2014\",\n\t\t      \"fromDate\": \"2014-05-16\",\n\t\t      \"toDate\": \"2024-05-09\",\n\t\t      \"gpa\": \"4.0\"\n\t\t    }\n\t\t  ]\n\t\t}",
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
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Employee Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/25-get-employee-education-end-point.php",
    "groupTitle": "Employee"
  },
  {
    "type": "get",
    "url": "/employee/:id/supervisor",
    "title": "16.Supervisor Details",
    "name": "getEmployeeSupervisor",
    "group": "Employee",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee id.</p>"
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
            "field": "name",
            "description": "<p>Supervisor name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "supervisorId",
            "description": "<p>Supervisor id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Supervisor code.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reportingMethod",
            "description": "<p>Reporting method to the supervisor.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Data",
            "description": "<p>Success response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n\n{\n \"data\": [\n   {\n     \"name\": \"Hameesh Von Johnson\",\n      \"id\": \"5\",\n      \"code\": \"1021\",\n      \"reportingMethod\": \"Direct\"\n   },\n   {\n     \"name\": \"James Paterson\",\n      \"id\": \"2\",\n      \"code\": \"103\",\n      \"reportingMethod\": \"Direct\"\n   },\n         ],\n   'rels : []\n}",
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
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Employee Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/16-get-employee-supervisor-detail-end-point.php",
    "groupTitle": "Employee"
  },
  {
    "type": "get",
    "url": "/employee/:id/work-experience",
    "title": "21.Employee Work Experience",
    "name": "getEmployeeWorkExperience",
    "group": "Employee",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee id.</p>"
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
            "field": "company",
            "description": "<p>Company name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Work experience id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "jobTitle",
            "description": "<p>Job title.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "fromDate",
            "description": "<p>Experience from date.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "toDate",
            "description": "<p>Experience to date.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>Work experience comment.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Data",
            "description": "<p>Success response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n\n\t\t{\n\t\t  \"data\": [\n\t\t    {\n\t\t      \"id\": \"2\",\n\t\t      \"company\": \"Aniline pvt ltd\",\n\t\t      \"jobTitle\": \"Craft Worker\",\n\t\t      \"fromDate\": \"2016-02-09 00:00:00\",\n\t\t      \"toDate\": \"2017-02-12 00:00:00\",\n\t\t      \"comment\": \"sample comment\"\n\t\t    },\n\t\t    {\n\t\t      \"id\": \"1\",\n\t\t      \"company\": \"NSR 11\",\n\t\t      \"jobTitle\": \"Craft Worker123\",\n\t\t      \"fromDate\": \"2014-02-09 00:00:00\",\n\t\t      \"toDate\": \"2016-02-12 00:00:00\",\n\t\t      \"comment\": \"test\"\n\t\t    }\n\t\t  ]\n\n\t\t}\n*   }",
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
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Employee Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/21-get-employee-work-Experience-end-point.php",
    "groupTitle": "Employee"
  },
  {
    "type": "get",
    "url": "/employee/event",
    "title": "20.Get Employee Events",
    "name": "getEvents",
    "group": "Employee",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "employeeId",
            "description": "<p>Employee id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "fromDate",
            "description": "<p>Event from date.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "toDate",
            "description": "<p>Event to date.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "event",
            "description": "<p>Event ( UPDATE | SAVE | DELETE ).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Event type ( employee | contact | jobDetail | supervisor | subordinate |dependent ).</p>"
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
            "field": "employeeId",
            "description": "<p>Employee id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "employeeName",
            "description": "<p>Employee full name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event",
            "description": "<p>Event.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Event type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createdBy",
            "description": "<p>Created user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createdDate",
            "description": "<p>Created date.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "note",
            "description": "<p>Note.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Data",
            "description": "<p>Success response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n\n\t{\n\t \"data\": [\n\t    {\n\t      \"employeeId\": \"3\",\n\t      \"employeeName\": \"Glen Maxwell\",\n\t      \"event\": \"UPDATE\",\n\t      \"type\": \"contact\",\n\t      \"createdBy\": \"Admin\",\n\t      \"createdDate\": \"2017-04-12 11:05:51\",\n\t      \"note\": \"Update Employee Contact Details\"\n\t    },\n\t    {\n\t      \"employeeId\": \"3\",\n\t      \"employeeName\": \"Glen Maxwell\",\n\t      \"event\": \"SAVE\",\n\t      \"type\": \"supervisor\",\n\t      \"createdBy\": \"Admin\"\n\t      \"createdDate\": \"2017-04-12 01:47:23\",\n\t      \"note\": \"Saving Employee Supervisor Details\"\n          }\n               ]\n      }",
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
            "field": "RecordNotFound",
            "description": "<p>No Event Records Found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"No Event Records Found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/20-get-employee-event-end-point.php",
    "groupTitle": "Employee"
  },
  {
    "type": "post",
    "url": "/employee/:id",
    "title": "01.Save Employee",
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
            "description": "<p>Employee id.</p>"
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
            "field": "lastName",
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
            "field": "Data",
            "description": "<p>Success response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n {\n   \"success\": \"Successfully Saved\",\n   \"id\": \"11\"\n }",
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
            "description": "<p>Saving Failed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Bad Request\n{\n  \"error\": [\"Saving Failed\"]\n}",
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
    "title": "07.Save Employee Contact Detail",
    "name": "saveEmployeeContactDetails",
    "group": "Employee",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee number.</p>"
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
            "field": "Data",
            "description": "<p>Success response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n {\n   \"success\": \"Successfully Saved\"\n }",
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
            "description": "<p>Saving Failed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": [\"Saving Failed\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/7-save-employee-contact-end-point.php",
    "groupTitle": "Employee"
  },
  {
    "type": "post",
    "url": "/employee/:id/custom-field",
    "title": "29.Save Employee Custom Field",
    "name": "saveEmployeeCustomField",
    "group": "Employee",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "fieldId",
            "description": "<p>Field id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>Field value.</p>"
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
            "field": "Data",
            "description": "<p>Success response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n\n{\n\n\"success\":\"Successfully Saved\",\n\n}",
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
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CustomFieldNotFound",
            "description": "<p>The id of the custom field was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidParameter",
            "description": "<p>Invalid parameter.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Employee Not Found\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Custom Field Not Found\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 202 Invalid Parameter\n{\n  \"error\": \"Field Value Must Not Be Empty\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/29-save-employee-custom-field-end-point.php",
    "groupTitle": "Employee"
  },
  {
    "type": "post",
    "url": "/employee/:id/education",
    "title": "26.Save Employee Education",
    "name": "saveEmployeeEducation",
    "group": "Employee",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "level",
            "description": "<p>Education level id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "seqId",
            "description": "<p>Education record id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "institute",
            "description": "<p>Institute of studying.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "startDate",
            "description": "<p>Start date.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "endDate",
            "description": "<p>End date.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "specialization",
            "description": "<p>Specialization.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "year",
            "description": "<p>Year of study.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gpa",
            "description": "<p>Gpa/score.</p>"
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
            "field": "Data",
            "description": "<p>Success response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n\n{\n\n\"success\":\"Successfully Saved\",\n\"seqId\":3\n\n}",
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
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Employee Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/26-save-employee-education-end-point.php",
    "groupTitle": "Employee"
  },
  {
    "type": "post",
    "url": "/employee/:id/supervisor",
    "title": "17.Save Supervisor Details",
    "name": "saveEmployeeSupervisor",
    "group": "Employee",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "supervisorId",
            "description": "<p>Supervisor id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "reportingMethod",
            "description": "<p>Reporting method to the supervisor.</p>"
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
            "field": "Data",
            "description": "<p>Success response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n {\n   \"success\": \"Successfully Saved\"\n }",
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
            "description": "<p>Saving Failed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": [\"Saving Failed\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/17-save-employee-supervisor-detail-end-point.php",
    "groupTitle": "Employee"
  },
  {
    "type": "post",
    "url": "/employee/:id/work-experience",
    "title": "22.Save Employee Work Experience",
    "name": "saveEmployeeWorkExperience",
    "group": "Employee",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "company",
            "description": "<p>Company name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>job Title.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "fromDate",
            "description": "<p>Experience from date.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "toDate",
            "description": "<p>Experience to date.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>Work experience comment.</p>"
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
            "field": "Data",
            "description": "<p>Success response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n\n{\n\n\"success\":\"Successfully Saved\",\n\"seqId\":3\n\n}",
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
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Employee Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/22-save-employee-work-Experience-end-point.php",
    "groupTitle": "Employee"
  },
  {
    "type": "post",
    "url": "/employee/:id/dependent",
    "title": "12.Save Employee Dependent",
    "name": "saveEmployee_dependents",
    "group": "Employee",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee id.</p>"
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
            "field": "Data",
            "description": "<p>Success response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n {\n   \"success\": \"Successfully Saved\",\n   \"sequenceNumber\": 1\n }",
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
            "description": "<p>Saving Failed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": [\"Saving Failed\"]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 202 Invalid Parameter\n{\n  \"error\": [\"Invalid Parameter\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/12-save-employee-dependents-end-point.php",
    "groupTitle": "Employee"
  },
  {
    "type": "post",
    "url": "/employee/:id/action/terminate",
    "title": "04.Terminate Employment",
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
            "field": "id",
            "description": "<p>Employee id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>Mandatory termination date.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "reason",
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
            "field": "Data",
            "description": "<p>Success response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n {\n   \"success\": \"Successfully Terminated\"\n }",
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
            "description": "<p>Saving Failed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": [\"Termination Failed\"]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 202 Invalid Parameter\n{\n  \"error\": [\"Invalid Parameter\"]\n}",
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
    "title": "08.Update Employee Contact Detail",
    "name": "updateEmployeeContactDetails",
    "group": "Employee",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee id.</p>"
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
            "field": "Data",
            "description": "<p>Success response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n {\n   \"success\": \"Successfully Updated\"\n }",
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
            "description": "<p>Updating Failed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": [\"Updating Failed\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/8-update-employee-contact-details-end-point.php",
    "groupTitle": "Employee"
  },
  {
    "type": "put",
    "url": "/employee/:id/custom-field",
    "title": "30.Update Employee Custom Field",
    "name": "updateEmployeeCustomField",
    "group": "Employee",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "fieldId",
            "description": "<p>Field id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>Field value.</p>"
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
            "field": "Data",
            "description": "<p>Success response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n\n{\n\n\"success\":\"Successfully Saved\",\n\n}",
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
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CustomFieldNotFound",
            "description": "<p>The id of the custom field was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidParameter",
            "description": "<p>Invalid parameter.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Employee Not Found\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Custom Field Not Found\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 202 Invalid Parameter\n{\n  \"error\": \"Field Value Must Not Be Empty\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/30-update-employee-custom-field-end-point.php",
    "groupTitle": "Employee"
  },
  {
    "type": "put",
    "url": "/employee/:id/dependent",
    "title": "11.Update Employee Dependents",
    "name": "updateEmployeeDependents",
    "group": "Employee",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee id.</p>"
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
            "field": "Data",
            "description": "<p>Success response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n {\n   \"success\": \"Successfully Deleted\"\n }",
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
            "description": "<p>Saving Failed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n  \"error\": [\"Updating Failed\"]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Invalid Parameter\n{\n  \"error\": [\"Invalid parameter\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/11-update-employee-dependents-end-point.php",
    "groupTitle": "Employee"
  },
  {
    "type": "put",
    "url": "/employee/:id/education",
    "title": "33.Update Employee Education",
    "name": "updateEmployeeEducation",
    "group": "Employee",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "level",
            "description": "<p>Education level id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "seqId",
            "description": "<p>Education record id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "institute",
            "description": "<p>Institute of studying.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "startDate",
            "description": "<p>Start date.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "endDateDate",
            "description": "<p>End date.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "specialization",
            "description": "<p>Specialization.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "year",
            "description": "<p>Year of study.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gpa",
            "description": "<p>Gpa/score.</p>"
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
            "field": "Data",
            "description": "<p>Success response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n\n{\n\n\"success\":\"Successfully Updated\",\n\"seqId\":3\n\n}",
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
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RecordNotFound",
            "description": "<p>The id of the record was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Employee Not Found\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Employee Education Record Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/33-update-employee-education-end-point.php",
    "groupTitle": "Employee"
  },
  {
    "type": "put",
    "url": "/employee/:id/job-detail",
    "title": "15.Update Employee Job Detail",
    "name": "updateEmployeeJobDetails",
    "group": "Employee",
    "version": "0.1.0",
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
            "type": "Number",
            "optional": false,
            "field": "title",
            "description": "<p>Job title id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "category",
            "description": "<p>Job category id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>Employee job status id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "subunit",
            "description": "<p>Subunit id of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "location",
            "description": "<p>Job location id of the employee.</p>"
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
            "description": "<p>Data Success response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n {\n   \"success\": \"Successfully Saved\"\n }",
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
            "description": "<p>Saving Failed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": [\"Saving Failed\"]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 202 Invalid Parameter\n{\n  \"error\": [\"Invalid Parameter\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/15-update-employee-job-detail-end-point.php",
    "groupTitle": "Employee"
  },
  {
    "type": "put",
    "url": "/employee/:id/supervisor",
    "title": "19.Update Supervisor Details",
    "name": "updateEmployeeSupervisor",
    "group": "Employee",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Supervisor name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "supervisorId",
            "description": "<p>Supervisor id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "reportingMethod",
            "description": "<p>Reporting method to the supervisor.</p>"
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
            "field": "Data",
            "description": "<p>Success response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n {\n   \"success\": \"Successfully Saved\"\n }",
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
            "description": "<p>Saving Failed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": [\"Saving Failed\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/19-update-employee-supervisor-detail-end-point.php",
    "groupTitle": "Employee"
  },
  {
    "type": "put",
    "url": "/employee/:id/work-experience",
    "title": "23.Update Employee Work Experience",
    "name": "updateEmployeeWorkExperience",
    "group": "Employee",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "seqId",
            "description": "<p>Work experience record id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "company",
            "description": "<p>Company name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>job Title.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "fromDate",
            "description": "<p>Experience from date.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "toDate",
            "description": "<p>Experience to date.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>Work experience comment.</p>"
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
            "field": "Data",
            "description": "<p>Success response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n\n{\n\n\"success\":\"Successfully Updated\"\n\n}",
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
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RecordNotFound",
            "description": "<p>The id of the record was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Employee Not Found\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Work Experience Record Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/23-update-employee-work-Experience-end-point.php",
    "groupTitle": "Employee"
  },
  {
    "type": "get",
    "url": "/employee/:id/entitlement",
    "title": "5.Get Employee Leave Entitlement",
    "name": "employeeLeaveEntitlement",
    "group": "Leave",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "leaveType",
            "description": "<p>Leave type.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "fromDate",
            "description": "<p>From date.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "toDate",
            "description": "<p>To date.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Entitlement id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Leave type.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "validFrom",
            "description": "<p>Valid from date.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "validTo",
            "description": "<p>Valid to date.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "days",
            "description": "<p>Entitled days.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n\n   {\n   \"data\": [\n   {\n   \"id\": \"2\",\n   \"type\": \"Annual\",\n   \"validFrom\": \"2017-01-01 \",\n   \"validTo\": \"2018-02-28 \",\n   \"days\": \"10.0\"\n   }\n   ],\n   \"rels\": []\n   }",
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
            "field": "No-Records",
            "description": "<p>Found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Employee",
            "description": "<p>Not Found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Record Not Found\n{\n  \"error\": [\"No Records Found\"]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Employee Not Found\n{\n  \"error\": [\"Employee Not Found\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/employee-leave-entitlement-end-point.php",
    "groupTitle": "Leave"
  },
  {
    "type": "get",
    "url": "/employee/:id/leave-request",
    "title": "9.Get Employee Leave Requests",
    "name": "employeeLeaveRequest",
    "group": "Leave",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "id",
            "description": "<p>Employee id.</p>"
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
            "field": "employeeName",
            "description": "<p>Employee name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "employeeId",
            "description": "<p>Employee id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "fromDate",
            "description": "<p>From date.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "toDate",
            "description": "<p>To date.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Leave type.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Leave request id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "leaveBalance",
            "description": "<p>Leave balance.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "numberOfDays",
            "description": "<p>Number of Days.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "comments",
            "description": "<p>Leave request comments.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Commented date.</p>"
          },
          {
            "group": "Success 200",
            "type": "Time",
            "optional": false,
            "field": "time",
            "description": "<p>Commented time.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>Comment .</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "days",
            "description": "<p>Leave days.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Leave status.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "duration",
            "description": "<p>Leave duration.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "durationString",
            "description": "<p>Leave duration as a String for specify time and half days.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n {\n      \"employeeName\" : \"Shane Warne\",\n      \"employeeId\"   :'34',\n      \"id\": \"2\",\n      \"fromDate\": \"2017-03-31\",\n      \"toDate\": \"2017-03-31\",\n      \"leaveBalance\": 9,\n      \"numberOfDays\": \"1.00\",\n          \"comments\": [\n               {\n               \"user\": \"Admin\",\n               \"date\": \"2017-03-16\",\n               \"time\": \"14:20:27\",\n               \"comment\": \"Casual leaves are granted\"\n               },\n               {\n               \"author\": \"Admin\",\n               \"date\": \"2017-03-16\",\n               \"time\": \"14:18:10\",\n               \"comment\": \"leaves granted\"\n               }\n                      ]\n    \"days\": [\n         {\n           \"date\": \"2017-05-25\",\n           \"status\": \"SCHEDULED\",\n           \"type\": \"Short Leave\",\n           \"duration\": \"8.00\",\n          \"comments\": [\n               {\n               \"user\": \"Admin\",\n               \"date\": \"2017-03-16\",\n               \"time\": \"14:20:27\",\n               \"comment\": \"Granted\"\n               },\n               {\n               \"author\": \"Admin\",\n               \"date\": \"2017-03-16\",\n               \"time\": \"14:18:10\",\n               \"comment\": \"Check the balance\"\n               }\n                      ]\n       },\n       {\n           \"date\": \"2017-05-24\",\n           \"status\": \"SCHEDULED\",\n           \"type\": \"Short Leave\",\n           \"duration\": \"8.00\",\n           \"comments\": \"\"\n       }\n           ]\n\n }",
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
            "field": "No-Records",
            "description": "<p>Found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Employee",
            "description": "<p>Not Found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Record Not Found\n{\n  \"error\": [\"No Records Found\"]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Employee Not Found\n{\n  \"error\": [\"Employee Not Found\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/employee-leave-requests-end-point.php",
    "groupTitle": "Leave"
  },
  {
    "type": "get",
    "url": "/leave/period",
    "title": "3.Get Leave Period",
    "name": "getLeavePeriods",
    "group": "Leave",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n       {\n        \"data\": [\n       [\n\n       \"2017-01-01\",\n       \"2018-02-28\"\n\n       ],\n       [\n\n       \"2018-03-01\",\n       \"2019-02-28\"\n\n       ]\n       ],\n       \"rels\": []\n       }",
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
            "field": "No-Records",
            "description": "<p>Found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"No Leave Periods Found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/get-leave-period-end-point.php",
    "groupTitle": "Leave"
  },
  {
    "type": "get",
    "url": "/leave/type",
    "title": "2.Get Leave Types",
    "name": "leaveTypes",
    "group": "Leave",
    "version": "0.1.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Leave type.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Leave type id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n {\n   \"type\": \"Annual\",\n   \"id\": \"11\"\n }",
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
            "field": "No-Records",
            "description": "<p>Found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Record Not Found\n{\n  \"error\": [\"No Leave Types Available\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/leave-types-end-point.php",
    "groupTitle": "Leave"
  },
  {
    "type": "post",
    "url": "/employee/:id/entitlement",
    "title": "4.Save Employee Leave Entitlement",
    "name": "saveEmployeeLeaveEntitlement",
    "group": "Leave",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "leaveType",
            "description": "<p>Leave type.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "fromDate",
            "description": "<p>From date.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "toDate",
            "description": "<p>To date.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "days",
            "description": "<p>Number of days.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n {\n   \"success\": \"Successfully Saved\"\n }",
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
            "description": "<p>Saving Failed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": [\"Saving Failed\"]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 202 Invalid Parameter\n{\n  \"error\": [\"Invalid Parameter\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/save-employee-leave-entitlement-end-point.php",
    "groupTitle": "Leave"
  },
  {
    "type": "post",
    "url": "/employee/:id/leave-request",
    "title": "6.Save Leave Single Day Request",
    "name": "saveLeaveRequest",
    "group": "Leave",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Employee id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Mandatory leave type name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "fromDate",
            "description": "<p>Leave start date.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "toDate",
            "description": "<p>Leave end date.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "comment",
            "description": "<p>Leave comment.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "singleType",
            "description": "<p>Single day leave applying type ('half_day','full_day','specify_time').</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "singleAMPM",
            "description": "<p>Half day morning or evening ( 'AM','PM') (required for 'half_day').</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "singleFromTime",
            "description": "<p>Single day from time for specify time ( required if specifying time ).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "singleToTime",
            "description": "<p>Single day to time for specify time ( required if specifying time ).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n {\n   \"success\": \"Successfully Saved\"\n }",
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
            "description": "<p>Saving Failed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": [\"Saving Failed\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/save-leave-request-end-point.php",
    "groupTitle": "Leave"
  },
  {
    "type": "post",
    "url": "/leave/type",
    "title": "1.Save Leave Type",
    "name": "saveLeaveType",
    "group": "Leave",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Mandatory leave type name.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n {\n   \"success\": \"Successfully Saved\"\n }",
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
            "field": "No-Records",
            "description": "<p>Found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Bad-Response",
            "description": "<p>Saving Failed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": [\"Saving Failed\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/save-leave-type-end-point.php",
    "groupTitle": "Leave"
  },
  {
    "type": "post",
    "url": "/employee/:id/leave-request",
    "title": "8.Save Multiple Day Leave Request",
    "name": "saveMultipleDayLeaveRequest",
    "group": "Leave",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "empId",
            "description": "<p>Employee id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Mandatory leave type name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "fromDate",
            "description": "<p>Leave start date.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "toDate",
            "description": "<p>Leave end date.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "comment",
            "description": "<p>Leave comment.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "partialOption",
            "description": "<p>Partial day option ( required ) ('all','start','end',start_end ). Note : If partial option is 'all'  start day fields must be filled. If partial option is 'end'  end day fields must be filed. If partial option is 'start'  start day fields must be filed. If partial option is 'start_end'  start and end day fields must be filed.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "startType",
            "description": "<p>Start day leave applying type ('half_day','full_day','specify_time').</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "startAMPM",
            "description": "<p>Half day morning or evening ( 'AM','PM') required for  start day 'half_day'.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "startFromTime",
            "description": "<p>Start day from time for specify time(required for start day specifying time ).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "startToTime",
            "description": "<p>Start day to time for specify time(required for start day specifying time ).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endDayType",
            "description": "<p>End day leave applying type ('half_day','full_day','specify_time').</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endDayAMPM",
            "description": "<p>Half day morning or evening ( 'AM','PM')required for end day 'half_day'.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endDayFromTime",
            "description": "<p>End day from time for specify time(required for end day specifying time ).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endDayToTime",
            "description": "<p>End day to time for specify time (required for end day specifying time ).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n {\n   \"success\": \"Successfully Saved\"\n }",
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
            "description": "<p>Saving Failed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": [\"Saving Failed\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/save-multiple-day-leave-request-end-point.php",
    "groupTitle": "Leave"
  },
  {
    "type": "get",
    "url": "/leave/search",
    "title": "7.Search Leave Requests",
    "name": "searchLeaveRequest",
    "group": "Leave",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "fromDate",
            "description": "<p>From date.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "toDate",
            "description": "<p>To date.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "reject",
            "description": "<p>Leave status rejected ( 'true' / 'false' ).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "cancelled",
            "description": "<p>Leave status cancelled ( 'true' / 'false' ).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "pendingApproval",
            "description": "<p>Leave status pending approval ( 'true' / 'false' ).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "scheduled",
            "description": "<p>Leave status scheduled ( 'true' / 'false' ).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "taken",
            "description": "<p>Leave status taken ( 'true' / 'false' ).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "pastEmployee",
            "description": "<p>Past employee results ( 'true' /'false').</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "subunit",
            "description": "<p>Employee subunit id.</p>"
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
            "field": "employeeName",
            "description": "<p>Employee name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "employeeId",
            "description": "<p>Employee id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "fromDate",
            "description": "<p>From date.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "toDate",
            "description": "<p>To date.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Leave type.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Leave request id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "leaveBalance",
            "description": "<p>Leave balance.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "numberOfDays",
            "description": "<p>Number of Days.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "comments",
            "description": "<p>Leave request comments.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Commented date.</p>"
          },
          {
            "group": "Success 200",
            "type": "Time",
            "optional": false,
            "field": "time",
            "description": "<p>Commented time.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>Comment .</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "days",
            "description": "<p>Leave days.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Leave status.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "duration",
            "description": "<p>Leave duration.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "durationString",
            "description": "<p>Leave duration as a String for specify time and half days.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n {\n      \"employeeName\" : \"Shane Warne\",\n      \"employeeId\"   :'34',\n      \"id\": \"2\",\n      \"fromDate\": \"2017-03-31\",\n      \"toDate\": \"2017-03-31\",\n      \"leaveBalance\": 9,\n      \"numberOfDays\": \"1.00\",\n          \"comments\": [\n               {\n               \"user\": \"Admin\",\n               \"date\": \"2017-03-16\",\n               \"time\": \"14:20:27\",\n               \"comment\": \"Test\"\n               },\n               {\n               \"author\": \"Admin\",\n               \"date\": \"2017-03-16\",\n               \"time\": \"14:18:10\",\n               \"comment\": \"Test\"\n               }\n    \"days\": [\n         {\n           \"date\": \"2017-05-25\",\n           \"status\": \"SCHEDULED\",\n           \"type\": \"Short Leave\",\n           \"duration\": \"8.00\",\n           \"comments\": \"\"\n       },\n       {\n           \"date\": \"2017-05-24\",\n           \"status\": \"SCHEDULED\",\n           \"type\": \"Short Leave\",\n           \"duration\": \"8.00\",\n           \"comments\": \"\"\n       }\n           ]\n\n }",
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
            "field": "No-Records",
            "description": "<p>Found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Employee",
            "description": "<p>Not Found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Record Not Found\n{\n  \"error\": [\"No Records Found\"]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Employee Not Found\n{\n  \"error\": [\"Employee Not Found\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/search-leave-requests-end-point.php",
    "groupTitle": "Leave"
  }
] });
