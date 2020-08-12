using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace To_Do_List_API.Model
{
    public class Items
    {
        public Int32 id { get; set; }
        public string item { get; set; }
        public string done { get; set; }
        public string trash { get; set; }
    }
}
