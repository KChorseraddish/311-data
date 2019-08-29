class TreeMapper(object):
    def __init__(self, data_repository=None):
        self.color_map = {
            "Dead Animal Removal":"#0183b9",
            "Other":"#02fdbc",
            "Homeless Encampment":"#23ab72",
            "Single Streetlight Issue":"#23b097",
            "Electronic Waste":"#c97518",
            "Feedback":"#3f94ee",
            "Graffiti Removal":"#843cb9",
            "Multiple Streetlight Issue":"#fcbac7",
            "Metal/Household Appliances":"#f33edd",
            "Illegal Dumping Pickup":"#ab337d",
            "Bulky Items":"#d6d385",
            "Report Water Waste":"#8f0a00"
        }
        self.data_reepository = data_repository
        pass

    def BroadMap(self):
        target_view = "top_request_by_nc"
        dataset = self.data_reepository.Read(target_view)
        treemap_data = {"title": "Broad 311 Calls Map", "color": "#000000", "children": []}

        for row in dataset:
            data_point = {"title": row[0], "color": self.color_map[row[1]], "size": row[2]}
            treemap_data["children"].append(data_point)

        return treemap_data

    def NCMap(self, NCName=None):
        target_view = "broad_call_volume"
        dataset = self.data_reepository.Read(target_view)
        treemap_data = {"title": "Zoomed 311 Calls Map", "color": "#000000", "children": []}
        print(NCName)
        for row in dataset:
            if row[1] == NCName:
                data_point = {"title": row[2], "color": self.color_map[row[2]], "size": row[0]}
                treemap_data["children"].append(data_point)

        return treemap_data
