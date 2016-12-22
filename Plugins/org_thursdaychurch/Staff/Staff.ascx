<%@ Control Language="C#" AutoEventWireup="true" CodeFile="Staff.ascx.cs" Inherits="RockWeb.Plugins.org_newpointe.Staff.Staff" %>

<div class="container-fluid staff">

 
            <h2 class="text-center"><span><asp:Label runat="server" ID="lblGroupName"></asp:Label></span></h2>

    <hr />

    <asp:Repeater runat="server" ID="rptStaff" OnItemDataBound="rptStaff_ItemDataBound">
        <ItemTemplate>
		<div class="row card">
            <div class="col-xs-6 col-sm-3 text-center ">
                <asp:Image runat="server" ID="img" OnDataBinding="img_DataBinding" CssClass="staff"/>
                <h2><asp:Label runat="server" ID="lblName" OnDataBinding="lblName_DataBinding"></asp:Label></h2>
                <h3><asp:Label runat="server" ID="lblJob" OnDataBinding="lblJob_DataBinding"></asp:Label></h3>
		    <b><asp:Label runat="server" ID="lblName" OnDataBinding="lblEmail_DataBinding"></asp:Label></b>
			</div>
			<div class="col-md-8">
				<h1>Staff Bio</h1>
				<p><asp:Label runat="server" ID="lblBio" OnDataBinding="lblBio_DataBinding"></asp:Label></p>
			</div>
		</div>

		</ItemTemplate>
    </asp:Repeater>
