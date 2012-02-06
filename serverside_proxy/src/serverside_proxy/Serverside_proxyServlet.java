package serverside_proxy;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.net.HttpURLConnection;
import java.net.URLConnection;
import java.net.URLEncoder;
//import java.net.Proxy;
import java.net.URL;

import javax.servlet.http.*;

@SuppressWarnings("serial")
public class Serverside_proxyServlet extends HttpServlet {
	//private static final String String = null;
	public void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws IOException {
		String jsonData = req.getQueryString();
		//String jsonData = req.getParameter("symbol");
		String jsonOut = "";
		String[] Links = jsonData.split("&");
		for (int i = 0; i < Links.length; i++) {
			jsonOut = jsonOut + expandShortURL(Links[i]) + "\n";
		}
		
		//String output = req.getParameter("callback") + "(" + jsonData + ");";
		String output = jsonOut;

	    resp.setHeader("Access-Control-Max-Age","3628800");
	    resp.setHeader("Access-Control-Allow-Origin","*");
	    resp.setHeader("Access-Control-Allow-Methods","GET");
		resp.setContentType("text/javascript");

		PrintWriter out = resp.getWriter();
		out.print(output);
	}
	 public String expandShortURL(String address) throws IOException {

		 	URL url = new URL(address);
	        HttpURLConnection connection = (HttpURLConnection) url.openConnection(); //using proxy may increase latency
	        connection.setInstanceFollowRedirects(false);
	        connection.connect();
	        String expandedURL =  connection.getHeaderField("Location");
	        connection.getInputStream().close();
	        return expandedURL;
		 
	      /*  String result;
	        URLConnection conn = null;
	        InputStream  in = null;
	        URL url = new URL(address);
	        conn = url.openConnection();
	        in = conn.getInputStream();
	        result = conn.getURL().toString();
	        in.close();
	        return result;*/
	    }
}
