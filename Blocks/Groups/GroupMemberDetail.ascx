﻿<%@ Control Language="C#" AutoEventWireup="true" CodeFile="GroupMemberDetail.ascx.cs" Inherits="RockWeb.Blocks.Groups.GroupMemberDetail" %>

<asp:UpdatePanel ID="upDetail" runat="server">
    <ContentTemplate>

        <asp:HiddenField ID="hfGroupId" runat="server" />
        <asp:HiddenField ID="hfGroupMemberId" runat="server" />


        <div class="panel panel-block">
            <div class="panel-heading">
                <h1 class="panel-title">
                    <asp:Literal ID="lGroupIconHtml" runat="server" />
                    <asp:Literal ID="lReadOnlyTitle" runat="server" />
                </h1>

                <div class="panel-labels">
                    <Rock:HighlightLabel ID="hfDateAdded" runat="server" LabelType="Default" />
                </div>
            </div>

            <div class="panel-body">

                <Rock:NotificationBox ID="nbEditModeMessage" runat="server" NotificationBoxType="Info" />
                <asp:ValidationSummary ID="ValidationSummary1" runat="server" HeaderText="Please Correct the Following" CssClass="alert alert-danger" />
                <asp:CustomValidator ID="cvGroupMember" runat="server" Display="None" />
                <Rock:NotificationBox ID="nbErrorMessage" runat="server" NotificationBoxType="Danger" />

                <div id="pnlEditDetails" runat="server">

                    <div class="row">
                        <div class="col-md-6">
                            <Rock:PersonPicker runat="server" ID="ppGroupMemberPerson" Label="Person" CssClass="js-authorizedperson" Required="true" OnSelectPerson="ppGroupMemberPerson_SelectPerson" />
                        </div>
                        <div class="col-md-6">
                            <Rock:RockCheckBox runat="server" ID="cbIsNotified" Label="Notified" />
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6">
                            <Rock:RockDropDownList runat="server" ID="ddlGroupRole" DataTextField="Name" DataValueField="Id" Label="Role" Required="true" AutoPostBack="true" OnSelectedIndexChanged="ddlGroupRole_SelectedIndexChanged" />
                            <Rock:RockTextBox ID="tbNote" runat="server" Label="Note" TextMode="MultiLine" Rows="4" />
                        </div>
                        <div class="col-md-6">
                            <Rock:RockRadioButtonList ID="rblStatus" runat="server" Label="Status" RepeatDirection="Horizontal" />
                            <Rock:RockControlWrapper id="rcwLinkedRegistrations" runat="server" Label="Registration">
                                <ul class="list-unstyled">
                                    <asp:Repeater ID="rptLinkedRegistrations" runat="server">
                                        <ItemTemplate>
                                            <li><a href='<%# RegistrationUrl( (int)Eval("Id" ) ) %>'><%# Eval("Name") %></a></li>
                                        </ItemTemplate>
                                    </asp:Repeater>
                                </ul>
                            </Rock:RockControlWrapper>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12">
                            <asp:PlaceHolder ID="phAttributes" runat="server" EnableViewState="false"></asp:PlaceHolder>
                            <asp:PlaceHolder ID="phAttributesReadOnly" runat="server" EnableViewState="false"></asp:PlaceHolder>
                        </div>
                    </div>

                    <asp:Panel ID="pnlRequirements" runat="server">
                        <div class="row">
                            <div class="col-md-6">
                            </div>
                            <div class="col-md-6">
                                <Rock:RockControlWrapper ID="rcwRequirements" runat="server" Label="Requirements">
                                    <Rock:NotificationBox ID="nbRequirementsErrors" runat="server" Dismissable="true" NotificationBoxType="Warning" />
                                    <Rock:RockCheckBoxList ID="cblManualRequirements" RepeatDirection="Vertical" runat="server" Label="" />
                                    <div class="labels">
                                        <asp:Literal ID="lRequirementsLabels" runat="server" />
                                    </div>
                                </Rock:RockControlWrapper>
                            </div>
                        </div>
                    </asp:Panel>

                    <Rock:NotificationBox runat="server" ID="nbRecheckedNotification" NotificationBoxType="Success" Dismissable="true" Text="Successfully re-checked requirements at {0}" Visible="false" />

                    <div class="actions">
                        <asp:LinkButton ID="btnSave" runat="server" AccessKey="s" Text="Save" CssClass="btn btn-primary" OnClick="btnSave_Click"></asp:LinkButton>
                        <asp:LinkButton ID="btnReCheckRequirements" runat="server" AccessKey="s" Text="Re-Check Requirements" CssClass="btn btn-default" OnClick="btnReCheckRequirements_Click" CausesValidation="false"></asp:LinkButton>
                        <asp:LinkButton ID="btnCancel" runat="server" AccessKey="c" Text="Cancel" CssClass="btn btn-link" OnClick="btnCancel_Click" CausesValidation="false"></asp:LinkButton>
                        <asp:LinkButton ID="btnShowMoveDialog" runat="server" CssClass="btn btn-default pull-right" OnClick="btnShowMoveDialog_Click" ToolTip="Move to another group" CausesValidation="false"><i class="fa fa-external-link"></i></asp:LinkButton>
                    </div>

                </div>

            </div>
        </div>

        <Rock:ModalDialog ID="mdMoveGroupMember" runat="server" Title="Move Group Member" ValidationGroup="vgMoveGroupMember" Visible="false" CancelLinkVisible="false">
            <Content>
                <asp:ValidationSummary ID="vsMoveGroupMember" runat="server" ValidationGroup="vgMoveGroupMember" HeaderText="Please Correct the Following" CssClass="alert alert-danger"  />
                <div class="row">
                    <div class="col-md-12">
                        <Rock:RockLiteral ID="lCurrentGroup" runat="server" Label="Current Group" />
                        <Rock:GroupPicker ID="gpMoveGroupMember" runat="server" Required="true" Label="Destination Group" ValidationGroup="vgMoveGroupMember" OnSelectItem="gpMoveGroupMember_SelectItem" />
                        <Rock:GroupRolePicker ID="grpMoveGroupMember" runat="server" Label="Role" ValidationGroup="vgMoveGroupMember" GroupTypeId="0" />   
                        <Rock:RockCheckBox ID="cbMoveGroupMemberMoveNotes" runat="server" ValidationGroup="vgMoveGroupMember" Label="Move Notes" Help="If this group member has notes, move these notes with them to their new group." />
                        <Rock:NotificationBox ID="nbMoveGroupMemberWarning" runat="server" NotificationBoxType="Warning" Visible="false" />
                    </div>
                </div>
                <br />
                <div class="actions">
                    <asp:LinkButton ID="btnMoveGroupMember" runat="server" CssClass="btn btn-primary" Text="Move" ValidationGroup="vgMoveGroupMember" OnClick="btnMoveGroupMember_Click" />
                </div>
            </Content>
        </Rock:ModalDialog>

    </ContentTemplate>
</asp:UpdatePanel>
