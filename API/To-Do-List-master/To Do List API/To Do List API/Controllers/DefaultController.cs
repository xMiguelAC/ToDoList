using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;
using To_Do_List_API.Model;
using Microsoft.AspNetCore.Cors;

namespace To_Do_List_API.Controllers
{
    public class DefaultController : Controller
    {
        public string constring = "Data Source=STIFF\\SQLEXPRESS;Initial Catalog=todo;Integrated Security=True";


        [Route("[controller]/[action]")]
        [HttpGet]
        public List<Items> Get() 
        {
            string message = "Success";
            string query = "select * from items where status = 0";

            List<Items> items = new List<Items>();

                try
                {
                    using (SqlConnection SQLCon = new SqlConnection(constring))
                    {
                        SQLCon.Open();

                        SqlCommand SQLCmd = new SqlCommand(query, SQLCon);

                        SqlDataReader reader = SQLCmd.ExecuteReader();
                        while (reader.Read())
                        {
                            Items item = new Items();
                            item.id = reader.GetInt32(0);
                            item.item = reader.GetString(1);
                            item.done = reader.GetString(2);
                            item.trash = reader.GetString(3);
                            items.Add(item);
                        }
                        reader.Close();
                        SQLCon.Close();
                    }
                }
                catch (Exception e)
                {
                    message = e.ToString();
                }


                Response.StatusCode = 200;
                return items;
        }

        [Route("[controller]/[action]/{item}")]
        [HttpPost]
        public JsonResult Insert(string item)
        {
            string message = "Success";
            string query = $"insert into items (item, done, status) values ({item}, {0}, {0})";

            try
            {
                using (SqlConnection SQLCon = new SqlConnection(constring))
                {
                    SQLCon.Open();

                    SqlCommand SQLCmd = new SqlCommand(query, SQLCon);
                    SQLCmd.ExecuteNonQuery();


                    SQLCon.Close();
                }
            }
            catch (Exception e)
            {
                message = e.ToString();
            }

            return Json(message);
        }

        [Route("[controller]/[action]/{id}/{item}")]
        [HttpPost]
        public JsonResult Modify(Int32 id, string item)
        {
            string message = "Success";
            string query = $"update items set item = {item} where id = {id}";

            try
            {
                using (SqlConnection SQLCon = new SqlConnection(constring))
                {
                    SQLCon.Open();

                    SqlCommand SQLCmd = new SqlCommand(query, SQLCon);
                    SQLCmd.ExecuteNonQuery();


                    SQLCon.Close();
                }
            }
            catch (Exception e)
            {
                message = e.ToString();
            }

            return Json(message);
        }

        [Route("[controller]/[action]/{id}")]
        [HttpPost]
        public JsonResult SetDone(int id)
        {
            string message = "Success";
            string query = $"update items set done = 1 where id = {id}";

            try
            {
                using (SqlConnection SQLCon = new SqlConnection(constring))
                {
                    SQLCon.Open();

                    SqlCommand SQLCmd = new SqlCommand(query, SQLCon);
                    SQLCmd.ExecuteNonQuery();


                    SQLCon.Close();
                }
            }
            catch (Exception e)
            {
                message = e.ToString();
            }

            return Json(message);
        }

        [Route("[controller]/[action]/{id}")]
        [HttpPost]
        public JsonResult Delete(int id)
        {
            string message = "Success";
            string query = $"update items set status = 1 where id = {id}";

            try
            {
                using (SqlConnection SQLCon = new SqlConnection(constring))
                {
                    SQLCon.Open();

                    SqlCommand SQLCmd = new SqlCommand(query, SQLCon);
                    SQLCmd.ExecuteNonQuery();


                    SQLCon.Close();
                }
            }
            catch (Exception e)
            {
                message = e.ToString();
            }

            return Json(message);
        }
    }
}