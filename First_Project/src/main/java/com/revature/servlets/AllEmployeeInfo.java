package com.revature.servlets;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.revature.dao.EmployeeDaoImpl;
import com.revature.dao.RequestDaoImpl;

public class AllEmployeeInfo extends HttpServlet {
	private static final long serialVersionUID = 1L;

    public AllEmployeeInfo() {
        super();
        // TODO Auto-generated constructor stub
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		EmployeeDaoImpl emp = new EmployeeDaoImpl();
		//System.out.println(request.getSession().getAttribute("Employee_Id").toString());
		String Employee_Object = emp.getAllEmployeeInfo();
		response.setContentType("text/html");
		System.out.println(Employee_Object);
		response.getWriter().write(Employee_Object);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
