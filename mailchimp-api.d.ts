// Type definitions for Mailchimp API (mailchimp-api)
// Project: https://bitbucket.org/mailchimp/mailchimp-api-node/
// Definitions by: Maxime LUCE <https://github.com/SomaticIT/>
// Definitions: https://github.com/typed-contrib/mailchimp-api

export class Mailchimp {
    apiKey: string;
    debug: boolean;

    folders: Folders;
    templates: Templates;
    users: Users;
    helper: Helper;
    mobile: Mobile;
    conversations: Conversations;
    ecomm: Ecomm;
    neapolitan: Neapolitan;
    lists: Lists;
    campaigns: Campaigns;
    vip: Vip;
    reports: Reports;
    gallery: Gallery;
    goal: Goal;

    constructor();
    constructor(apiKey: string);
    constructor(apiKey: string, debug: boolean);
}
export namespace Mailchimp {
    export interface SuccessCallback<T> {
        (val: T): void;
    }
    export interface ErrorCallback {
        (e: RequestError): void;
    }

    export interface RequestError {
        status: string;
        name: string;
        code?: number;
        error: Error|string;
    }
    export interface EmailIdentifier {
        email?: string;
        euid?: string;
        leid?: string;
    }

    export interface SimpleListParam {
        start?: number;
        limit?: number;
        since?: string;
    }
    export interface SortListParam {
        start?: number;
        limit?: number;
        sort_field?: string;
        sort_dir?: string;
    }

    export interface StatusResult {
        status: string;
    }
    export interface CompletedResult {
        complete: boolean;
    }
    export interface SimpleListResult<T> {
        count: number;
        data: T[];
    }
    export interface TotalListResult<T> {
        total: number;
        data: T[];
    }

    export interface ActivityGeo {
        latitude: string;
        longitude: string;
        gmtoff: string;
        dstoff: string;
        timezone: string;
        cc: string;
        region: string;
    }
}

declare class Folders {
    master: Mailchimp;

    constructor(master: Mailchimp);

    /** Add a new folder to file campaigns, autoresponders, or templates in */
    add(params: Folders.AddParam): void;
    add(params: Folders.AddParam, onsuccess: Mailchimp.SuccessCallback<Folders.AddResult>): void;
    add(params: Folders.AddParam, onsuccess: Mailchimp.SuccessCallback<Folders.AddResult>, onerror: Mailchimp.ErrorCallback): void;

    /** Delete a campaign, autoresponder, or template folder. Note that this will simply make whatever was in the folder appear unfiled, no other data is removed */
    del(params: Folders.DelParam): void;
    del(params: Folders.DelParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.CompletedResult>): void;
    del(params: Folders.DelParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.CompletedResult>, onerror: Mailchimp.ErrorCallback): void;

    /** List all the folders of a certain type */
    list(params: Folders.ListParam): void;
    list(params: Folders.ListParam, onsuccess: Mailchimp.SuccessCallback<Folders.ListResult[]>): void;
    list(params: Folders.ListParam, onsuccess: Mailchimp.SuccessCallback<Folders.ListResult[]>, onerror: Mailchimp.ErrorCallback): void;

    /** Update the name of a folder for campaigns, autoresponders, or templates */
    update(params: Folders.UpdateParam): void;
    update(params: Folders.UpdateParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.CompletedResult>): void;
    update(params: Folders.UpdateParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.CompletedResult>, onerror: Mailchimp.ErrorCallback): void;
}
declare namespace Folders {
    export interface AddParam {
        name: string;
        type: string;
    }
    export interface AddResult {
        folder_id: number;
    }

    export interface DelParam {
        fid: number;
        type: string;
    }

    export interface ListParam {
        type: string;
    }
    export interface ListResult {
        folder_id: number;
        name: string;
        date_created: string;
        type: string;
        cnt: number;
    }

    export interface UpdateParam {
        fid: number;
        name: string;
        type: string;
    }
}

declare class Templates {
    master: Mailchimp;

    constructor(master: Mailchimp);

    /** Create a new user template, NOT campaign content. These templates can then be applied while creating campaigns. */
    add(params: Templates.AddParam): void;
    add(params: Templates.AddParam, onsuccess: Mailchimp.SuccessCallback<Templates.AddResult>): void;
    add(params: Templates.AddParam, onsuccess: Mailchimp.SuccessCallback<Templates.AddResult>, onerror: Mailchimp.ErrorCallback): void;

    /** Delete (deactivate) a user template */
    del(params: Templates.DelParam): void;
    del(params: Templates.DelParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.CompletedResult>): void;
    del(params: Templates.DelParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.CompletedResult>, onerror: Mailchimp.ErrorCallback): void;

    /** Pull details for a specific template to help support editing */
    info(params: Templates.InfoParam): void;
    info(params: Templates.InfoParam, onsuccess: Mailchimp.SuccessCallback<Templates.InfoResult>): void;
    info(params: Templates.InfoParam, onsuccess: Mailchimp.SuccessCallback<Templates.InfoResult>, onerror: Mailchimp.ErrorCallback): void;

    /** Retrieve various templates available in the system, allowing some thing similar to our template gallery to be created. */
    list(params: Templates.ListParam): void;
    list(params: Templates.ListParam, onsuccess: Mailchimp.SuccessCallback<Templates.ListResult>): void;
    list(params: Templates.ListParam, onsuccess: Mailchimp.SuccessCallback<Templates.ListResult>, onerror: Mailchimp.ErrorCallback): void;

    /** Undelete (reactivate) a user template */
    undel(params: Templates.UndelParam): void;
    undel(params: Templates.UndelParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.CompletedResult>): void;
    undel(params: Templates.UndelParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.CompletedResult>, onerror: Mailchimp.ErrorCallback): void;

    /** Replace the content of a user template, NOT campaign content. */
    update(params: Templates.UpdateParam): void;
    update(params: Templates.UpdateParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.CompletedResult>): void;
    update(params: Templates.UpdateParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.CompletedResult>, onerror: Mailchimp.ErrorCallback): void;
}
declare namespace Templates {
    export interface TemplateBase {
        id: number;
        name: string;
        layout: string;
        category: string;
        preview_image: string;
        date_created: string;
        active: boolean;
        edit_source: boolean;
    }
    export interface TemplateUser extends TemplateBase {
        folder_id: boolean;
    }
    
    export interface AddParam {
        name: string;
        html: string;
        folder_id: number;
    }
    export interface AddResult {
        template_id: number;
    }

    export interface DelParam {
        template_id: number;
    }

    export interface InfoParam {
        template_id: number;
        type?: string;
    }
    export interface InfoResult {
        default_content: {
            [key: string]: string;
        };
        sections: {
            [key: string]: string;
        };
        source: string;
        preview: string;
    }

    export interface ListParam {
        types?: {
            user?: boolean;
            gallery?: boolean;
            base?: boolean;
        };
        filters?: {
            category?: string;
            folder_id?: string;
            include_inactive?: boolean;
            inactive_only?: boolean;
            include_drag_and_drop?: boolean;
        }
    }

    export interface ListResult {
        user?: TemplateUser[];
        gallery?: TemplateBase[];
        base?: TemplateBase[];
    }

    export interface UndelParam {
        template_id: number;
    }

    export interface UpdateParam {
        template_id: number;
        values: AddParam
    }
}

declare class Users {
    master: Mailchimp;

    constructor(master: Mailchimp);

    /** Invite a user to your account */
    invite(params: Users.InviteParam): void;
    invite(params: Users.InviteParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.StatusResult>): void;
    invite(params: Users.InviteParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.StatusResult>, onerror: Mailchimp.ErrorCallback): void;

    /** Resend an invite a user to your account. Note, if the same address has been invited multiple times, this will simpy re-send the most recent invite */
    inviteResend(params: Users.EmailParam): void;
    inviteResend(params: Users.EmailParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.StatusResult>): void;
    inviteResend(params: Users.EmailParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.StatusResult>, onerror: Mailchimp.ErrorCallback): void;

    /** Revoke an invitation sent to a user to your account. Note, if the same address has been invited multiple times, this will simpy revoke the most recent invite */
    inviteRevoke(params: Users.EmailParam): void;
    inviteRevoke(params: Users.EmailParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.StatusResult>): void;
    inviteRevoke(params: Users.EmailParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.StatusResult>, onerror: Mailchimp.ErrorCallback): void;

    /** Retrieve the list of pending users invitations have been sent for. */
    invites(params: {}): void;
    invites(params: {}, onsuccess: Mailchimp.SuccessCallback<Users.InvitesResult[]>): void;
    invites(params: {}, onsuccess: Mailchimp.SuccessCallback<Users.InvitesResult[]>, onerror: Mailchimp.ErrorCallback): void;

    /** Revoke access for a specified login */
    loginRevoke(params: Users.UsernameParam): void;
    loginRevoke(params: Users.UsernameParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.StatusResult>): void;
    loginRevoke(params: Users.UsernameParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.StatusResult>, onerror: Mailchimp.ErrorCallback): void;

    /** Retrieve the list of active logins. */
    logins(params: {}): void;
    logins(params: {}, onsuccess: Mailchimp.SuccessCallback<Users.LoginResult[]>): void;
    logins(params: {}, onsuccess: Mailchimp.SuccessCallback<Users.LoginResult[]>, onerror: Mailchimp.ErrorCallback): void;

    /** Retrieve the profile for the login owning the provided API Key */
    profile(params: {}): void;
    profile(params: {}, onsuccess: Mailchimp.SuccessCallback<Users.ProfileResult>): void;
    profile(params: {}, onsuccess: Mailchimp.SuccessCallback<Users.ProfileResult>, onerror: Mailchimp.ErrorCallback): void;
}
declare namespace Users {
    export interface EmailParam {
        email: string;
    }

    export interface InviteParam extends EmailParam {
        role: string;
        msg: string;
    }

    export interface InvitesResult {
        email: string;
        role: string;
        sent_at: string;
        expiration: string;
        msg: string;
    }

    export interface UsernameParam {
        username: string;
    }

    export interface LoginResult {
        id: number;
        username: string;
        name: string;
        email: string;
        role: string;
        avatar: string;
        global_user_id: number;
        dc_unique_id: string;
    }

    export interface ProfileResult extends LoginResult {
        account_name: string;
    }
}

declare class Helper {
    master: Mailchimp;

    constructor(master: Mailchimp);

    /** Retrieve lots of account information including payments made, plan info, some account stats, installed modules, contact info, and more. No private information like Credit Card numbers is available. */
    accountDetails(params: Helper.AccountDetailsParam): void;
    accountDetails(params: Helper.AccountDetailsParam, onsuccess: Mailchimp.SuccessCallback<Helper.AccountDetailsResult>): void;
    accountDetails(params: Helper.AccountDetailsParam, onsuccess: Mailchimp.SuccessCallback<Helper.AccountDetailsResult>, onerror: Mailchimp.ErrorCallback): void;

    /** Retrieve minimal data for all Campaigns a member was sent */
    campaignsForEmail(params: Helper.CampaignsForEmailParam): void;
    campaignsForEmail(params: Helper.CampaignsForEmailParam, onsuccess: Mailchimp.SuccessCallback<Helper.CampaignsForEmailResult>): void;
    campaignsForEmail(params: Helper.CampaignsForEmailParam, onsuccess: Mailchimp.SuccessCallback<Helper.CampaignsForEmailResult>, onerror: Mailchimp.ErrorCallback): void;

    /** Return the current Chimp Chatter messages for an account. */
    chimpChatter(params: {}): void;
    chimpChatter(params: {}, onsuccess: Mailchimp.SuccessCallback<Helper.ChimpChatterResult[]>): void;
    chimpChatter(params: {}, onsuccess: Mailchimp.SuccessCallback<Helper.ChimpChatterResult[]>, onerror: Mailchimp.ErrorCallback): void;

    /** Have HTML content auto-converted to a text-only format. You can send: plain HTML, an existing Campaign Id, or an existing Template Id. Note that this will not save anything to or update any of your lists, campaigns, or templates. It's also not just Lynx and is very fine tuned for our template layouts - your mileage may vary. */
    generateText(params: Helper.GenerateTextParam): void;
    generateText(params: Helper.GenerateTextParam, onsuccess: Mailchimp.SuccessCallback<Helper.GenerateTextResult>): void;
    generateText(params: Helper.GenerateTextParam, onsuccess: Mailchimp.SuccessCallback<Helper.GenerateTextResult>, onerror: Mailchimp.ErrorCallback): void;

    /** Send your HTML content to have the CSS inlined and optionally remove the original styles. */
    inlineCss(params: Helper.InlineCssParam): void;
    inlineCss(params: Helper.InlineCssParam, onsuccess: Mailchimp.SuccessCallback<Helper.InlineCssResult>): void;
    inlineCss(params: Helper.InlineCssParam, onsuccess: Mailchimp.SuccessCallback<Helper.InlineCssResult>, onerror: Mailchimp.ErrorCallback): void;

    /** Retrieve minimal List data for all lists a member is subscribed to. */
    listsForEmail(params: Helper.ListsForEmailParam): void;
    listsForEmail(params: Helper.ListsForEmailParam, onsuccess: Mailchimp.SuccessCallback<Helper.ListsForEmailResult[]>): void;
    listsForEmail(params: Helper.ListsForEmailParam, onsuccess: Mailchimp.SuccessCallback<Helper.ListsForEmailResult[]>, onerror: Mailchimp.ErrorCallback): void;

    /** "Ping" the MailChimp API - a simple method you can call that will return a constant value as long as everything is good. Note than unlike most all of our methods, we don't throw an Exception if we are having issues. You will simply receive a different string back that will explain our view on what is going on. */
    ping(params: {}): void;
    ping(params: {}, onsuccess: Mailchimp.SuccessCallback<Helper.PingResult>): void;
    ping(params: {}, onsuccess: Mailchimp.SuccessCallback<Helper.PingResult>, onerror: Mailchimp.ErrorCallback): void;

    /** Search all campaigns for the specified query terms */
    searchCampaigns(params: Helper.SearchCampaignsParam): void;
    searchCampaigns(params: Helper.SearchCampaignsParam, onsuccess: Mailchimp.SuccessCallback<Helper.SearchCampaignsResult>): void;
    searchCampaigns(params: Helper.SearchCampaignsParam, onsuccess: Mailchimp.SuccessCallback<Helper.SearchCampaignsResult>, onerror: Mailchimp.ErrorCallback): void;

    /** Search account wide or on a specific list using the specified query terms */
    searchMembers(params: Helper.SearchMembersParam): void;
    searchMembers(params: Helper.SearchMembersParam, onsuccess: Mailchimp.SuccessCallback<Helper.SearchMembersResult>): void;
    searchMembers(params: Helper.SearchMembersParam, onsuccess: Mailchimp.SuccessCallback<Helper.SearchMembersResult>, onerror: Mailchimp.ErrorCallback): void;

    /** Retrieve all domain verification records for an account */
    verifiedDomains(params: {}): void;
    verifiedDomains(params: {}, onsuccess: Mailchimp.SuccessCallback<Helper.VerifiedDomainsResult[]>): void;
    verifiedDomains(params: {}, onsuccess: Mailchimp.SuccessCallback<Helper.VerifiedDomainsResult[]>, onerror: Mailchimp.ErrorCallback): void;
}
declare namespace Helper {
    export interface AccountDetailsParam {
        exclude: string[];
    }

    export interface AccountContact {
        fname: string;
        lname: string;
        email: string;
        company: string;
        address1: string;
        address2: string;
        city: string;
        state: string;
        zip: string;
        country: string;
        url: string;
        phone: string;
        fax: string;
    }
    export interface AccountModule {
        id: string;
        name: string;
        added: string;
        data: any;
    }
    export interface AccountOrder {
        order_id: number;
        type: string;
        amount: number;
        date: string;
        credits_used: number;
    }
    export interface AccountRewardEarned {
        this_month: number;
        total_earned: number;
        remaining: number;
    }
    export interface AccountRewardReferal {
        name: string;
        email: string;
        signup_date: string;
        type: string;
    }
    export interface AccountRewardApplied {
        value: number;
        date: string;
        order_id: number;
        order_desc: string;
    }
    export interface AccountRewards {
        referrals_this_month: number;
        notify_on: string;
        notify_email: string;

        credits?: AccountRewardEarned;
        inspections?: AccountRewardEarned;
        referals?: AccountRewardReferal[];
        applied?: AccountRewardApplied[];
    }
    export interface AccountFacebookProfile {
        id: string;
        name: string;
        is_page: boolean;
    }
    export interface AccountIntegration {
        name: string;
        list_id: string;
        user_id?: string;
        account?: string;

        profiles: AccountFacebookProfile[];
    }
    export interface AccountDetailsResult {
        username: string;
        user_id: string;
        is_trial: boolean;
        is_approved: boolean;
        has_activated: boolean;
        timezone: string;
        plan_type: string;
        plan_low?: boolean;
        plan_high?: boolean;
        plan_start_date?: string;
        emails_left?: number;
        pending_monthly: boolean;
        first_payment: string;
        last_payment: string;
        times_logged_in: number;
        last_login: string;
        affiliate_link: string;

        contact: AccountContact;
        modules?: AccountModule[];
        orders?: AccountOrder[];
        rewards: AccountRewards;
        integrations?: AccountIntegration[];
    }

    export interface CampaignsForEmailParam {
        email: Mailchimp.EmailIdentifier;
        options?: {
            list_id: string;
        }
    }
    export interface CampaignsForEmailResult {
        id: string;
        title: string;
        subject: string;
        send_time: string;
        type: string;
    }

    export interface ChimpChatterResult {
        message: string;
        type: string;
        url: string;
        list_id: string;
        campaign_id: string;
        update_time: string;
    }

    export interface GenerateTextParam {
        type: string;
        content: {
            html?: string;
            cid?: string;
            user_template_id?: string;
            base_template_id?: string;
            gallery_template_id?: string;
            url?: string;
        };
    }
    export interface GenerateTextResult {
        text: string;
    }

    export interface InlineCssParam {
        html: string;
        strip_css?: boolean;
    }
    export interface InlineCssResult {
        html: string;
    }

    export interface ListsForEmailParam {
        email: Mailchimp.EmailIdentifier;
    }
    export interface ListsForEmailResult {
        id: string;
        web_id: number;
        name: string;
    }

    export interface PingResult {
        msg: string;
    }

    export interface SearchCampaignsParam {
        query: string;
        offset?: number;
        snip_start?: string;
        snip_end?: string;
    }
    export interface SearchCampaignsResult {
        total: number;
        results: string[];
        snippet: string;
        campaign: Campaigns.Details;
    }

    export interface SearchMembersParam {
        query: string;
        id?: string;
        offset?: number;
    }
    export interface SearchMembersResults {
        total: number;
        members: Lists.MemberDetails[];
    }
    export interface SearchMembersResult {
        exact_matches: SearchMembersResults;
        full_search: SearchMembersResults;
    }

    export interface VerifiedDomainsResult {
        domain: string;
        status: string;
        email: string;
    }
}

declare class Conversations {
    master: Mailchimp;

    constructor(master: Mailchimp);

    /** Retrieve conversation metadata, includes message data for the most recent message in the conversation */
    list(params: Conversations.ListParam): void;
    list(params: Conversations.ListParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.SimpleListResult<Conversations.Details>>): void;
    list(params: Conversations.ListParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.SimpleListResult<Conversations.Details>>, onerror: Mailchimp.ErrorCallback): void;

    /** Retrieve conversation messages */
    messages(params: Conversations.MessagesParam): void;
    messages(params: Conversations.MessagesParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.SimpleListResult<Conversations.Message>>): void;
    messages(params: Conversations.MessagesParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.SimpleListResult<Conversations.Message>>, onerror: Mailchimp.ErrorCallback): void;

    /** Reply to a conversation */
    reply(params: Conversations.ReplyParam): void;
    reply(params: Conversations.ReplyParam, onsuccess: Mailchimp.SuccessCallback<Conversations.Message>): void;
    reply(params: Conversations.ReplyParam, onsuccess: Mailchimp.SuccessCallback<Conversations.Message>, onerror: Mailchimp.ErrorCallback): void;
}
declare namespace Conversations {
    export interface Message {
        from_label: string;
        from_email: string;
        subject: string;
        message: string;
        read: boolean;
        timestamp: string;
    }
    export interface Details {
        unique_id: string;
        message_count: number;
        campaign_id: string;
        list_id: string;
        unread_messages: number;
        from_label: string;
        from_email: string;
        subject: string;
        timestamp: string;
        last_message: Message;
    }

    export interface ListParam {
        list_id?: string;
        leid?: string;
        campaign_id?: string;
        start?: number;
        limit?: number;
    }
    export interface MessagesParam {
        conversation_id: string;
        mark_as_read?: boolean;
        start?: number;
        limit?: number;
    }
    export interface ReplyParam {
        conversation_id: string;
        message: string;
    }
}

declare class Ecomm {
    master: Mailchimp;

    constructor(master: Mailchimp);

    /** Import Ecommerce Order Information to be used for Segmentation. This will generally be used by ecommerce package plugins provided by us or by 3rd part system developers. */
    orderAdd(params: Ecomm.OrderAddParam): void;
    orderAdd(params: Ecomm.OrderAddParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.CompletedResult>): void;
    orderAdd(params: Ecomm.OrderAddParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.CompletedResult>, onerror: Mailchimp.ErrorCallback): void;

    /** Delete Ecommerce Order Information used for segmentation. This will generally be used by ecommerce package plugins that we provide or by 3rd part system developers. */
    orderDel(params: Ecomm.OrderDelParam): void;
    orderDel(params: Ecomm.OrderDelParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.CompletedResult>): void;
    orderDel(params: Ecomm.OrderDelParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.CompletedResult>, onerror: Mailchimp.ErrorCallback): void;

    /** Retrieve the Ecommerce Orders for an account */
    orders(params: Ecomm.OrdersParam): void;
    orders(params: Ecomm.OrdersParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.SimpleListResult<Ecomm.OrderDetails>>): void;
    orders(params: Ecomm.OrdersParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.SimpleListResult<Ecomm.OrderDetails>>, onerror: Mailchimp.ErrorCallback): void;
}
declare namespace Ecomm {
    export interface OrderDetailsItem {
        line_num: string;
        product_id: number;
        product_name: string;
        product_sku: string;
        product_category_id: number;
        product_category_name: string;
        qty: number;
        cost: number;
    }
    export interface OrderDetails {
        store_id: string;
        store_name: string;
        order_id: string;
        email: string;
        order_total: number;
        tax_total: number;
        ship_total: number;
        order_date: string;
        items: OrderDetailsItem[];
    }

    export interface OrderAddItem {
        line_num?: number;
        product_id: number;
        sku?: string;
        product_name: string;
        category_id: number;
        category_name: string;
        qty?: number;
        cost?: number;
    }
    export interface OrderAddParam {
        order: {
            id: string;
            campaign_id?: string;
            email_id?: string;
            email?: string;
            total: number;
            order_date?: string;
            shipping?: number;
            tax?: number;
            store_id: string;
            store_name?: string;

            items: OrderAddItem[];
        };
    }

    export interface OrderDelParam {
        store_id: string;
        order_id: string;
    }
    export interface OrdersParam extends Mailchimp.SimpleListParam {
        cid?: string;
    }
}

declare class Lists {
    master: Mailchimp;

    constructor(master: Mailchimp);

    /** Get all email addresses that complained about a campaign sent to a list */
    abuseReports(params: Lists.AbuseReportsParam): void;
    abuseReports(params: Lists.AbuseReportsParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.TotalListResult<Lists.AbuseReport>>): void;
    abuseReports(params: Lists.AbuseReportsParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.TotalListResult<Lists.AbuseReport>>, onerror: Mailchimp.ErrorCallback): void;

    /** Access up to the previous 180 days of daily detailed aggregated activity stats for a given list. Does not include AutoResponder activity. */
    activity(params: Lists.ActivityParam): void;
    activity(params: Lists.ActivityParam, onsuccess: Mailchimp.SuccessCallback<Lists.ActivityResult[]>): void;
    activity(params: Lists.ActivityParam, onsuccess: Mailchimp.SuccessCallback<Lists.ActivityResult[]>, onerror: Mailchimp.ErrorCallback): void;

    /** Subscribe a batch of email addresses to a list at once. If you are using a serialized version of the API, we strongly suggest that you only run this method as a POST request, and not a GET request. Maximum batch sizes vary based on the amount of data in each record, though you should cap them at 5k - 10k records, depending on your experience. These calls are also long, so be sure you increase your timeout values. */
    batchSubscribe(params: Lists.BatchSubscribeParam): void;
    batchSubscribe(params: Lists.BatchSubscribeParam, onsuccess: Mailchimp.SuccessCallback<Lists.BatchSubscribeResult>): void;

    batchSubscribe(params: Lists.BatchSubscribeParam, onsuccess: Mailchimp.SuccessCallback<Lists.BatchSubscribeResult>, onerror: Mailchimp.ErrorCallback): void;

    /** Subscribe a batch of email addresses to a list at once. If you are using a serialized version of the API, we strongly suggest that you only run this method as a POST request, and not a GET request. Maximum batch sizes vary based on the amount of data in each record, though you should cap them at 5k - 10k records, depending on your experience. These calls are also long, so be sure you increase your timeout values. */
    batchUnsubscribe(params: Lists.BatchUnsubscribeParam): void;
    batchUnsubscribe(params: Lists.BatchUnsubscribeParam, onsuccess: Mailchimp.SuccessCallback<Lists.BatchUnsubscribeResult>): void;
    batchUnsubscribe(params: Lists.BatchUnsubscribeParam, onsuccess: Mailchimp.SuccessCallback<Lists.BatchUnsubscribeResult>, onerror: Mailchimp.ErrorCallback): void;

    /** Retrieve the clients that the list's subscribers have been tagged as being used based on user agents seen. Made possible by user-agent-string.info */
    clients(params: Lists.ClientsParam): void;
    clients(params: Lists.ClientsParam, onsuccess: Mailchimp.SuccessCallback<Lists.ClientsResult>): void;
    clients(params: Lists.ClientsParam, onsuccess: Mailchimp.SuccessCallback<Lists.ClientsResult>, onerror: Mailchimp.ErrorCallback): void;

    /** Access the Growth History by Month in aggregate or for a given list. */
    growthHistory(params: Lists.GrowthHistoryParam): void;
    growthHistory(params: Lists.GrowthHistoryParam, onsuccess: Mailchimp.SuccessCallback<Lists.GrowthHistoryResult[]>): void;
    growthHistory(params: Lists.GrowthHistoryParam, onsuccess: Mailchimp.SuccessCallback<Lists.GrowthHistoryResult[]>, onerror: Mailchimp.ErrorCallback): void;

    /** Add a single Interest Group - if interest groups for the List are not yet enabled, adding the first group will automatically turn them on. */
    interestGroupAdd(params: Lists.InterestGroupAddDelParam): void;
    interestGroupAdd(params: Lists.InterestGroupAddDelParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.CompletedResult>): void;
    interestGroupAdd(params: Lists.InterestGroupAddDelParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.CompletedResult>, onerror: Mailchimp.ErrorCallback): void;

    /** Delete a single Interest Group - if the last group for a list is deleted, this will also turn groups for the list off. */
    interestGroupDel(params: Lists.InterestGroupAddDelParam): void;
    interestGroupDel(params: Lists.InterestGroupAddDelParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.CompletedResult>): void;
    interestGroupDel(params: Lists.InterestGroupAddDelParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.CompletedResult>, onerror: Mailchimp.ErrorCallback): void;

    /** Change the name of an Interest Group */
    interestGroupUpdate(params: Lists.InterestGroupUpdateParam): void;
    interestGroupUpdate(params: Lists.InterestGroupUpdateParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.CompletedResult>): void;
    interestGroupUpdate(params: Lists.InterestGroupUpdateParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.CompletedResult>, onerror: Mailchimp.ErrorCallback): void;

    /** Add a new Interest Grouping - if interest groups for the List are not yet enabled, adding the first grouping will automatically turn them on. */
    interestGroupingAdd(params: Lists.InterestGroupingAddParam): void;
    interestGroupingAdd(params: Lists.InterestGroupingAddParam, onsuccess: Mailchimp.SuccessCallback<Lists.InterestGroupingAddResult>): void;
    interestGroupingAdd(params: Lists.InterestGroupingAddParam, onsuccess: Mailchimp.SuccessCallback<Lists.InterestGroupingAddResult>, onerror: Mailchimp.ErrorCallback): void;

    /** Delete an existing Interest Grouping - this will permanently delete all contained interest groups and will remove those selections from all list members */
    interestGroupingDel(params: Lists.InterestGroupingDelParam): void;
    interestGroupingDel(params: Lists.InterestGroupingDelParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.CompletedResult>): void;
    interestGroupingDel(params: Lists.InterestGroupingDelParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.CompletedResult>, onerror: Mailchimp.ErrorCallback): void;

    /** Update an existing Interest Grouping */
    interestGroupingUpdate(params: Lists.InterestGroupingUpdateParam): void;
    interestGroupingUpdate(params: Lists.InterestGroupingUpdateParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.CompletedResult>): void;
    interestGroupingUpdate(params: Lists.InterestGroupingUpdateParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.CompletedResult>, onerror: Mailchimp.ErrorCallback): void;

    /** Retrieve all of the lists defined for your user account */
    list(params: Lists.ListParam): void;
    list(params: Lists.ListParam, onsuccess: Mailchimp.SuccessCallback<Lists.ListResult>): void;
    list(params: Lists.ListParam, onsuccess: Mailchimp.SuccessCallback<Lists.ListResult>, onerror: Mailchimp.ErrorCallback): void;

    /** Retrieve the locations (countries) that the list's subscribers have been tagged to based on geocoding their IP address. */
    locations(params: Lists.LocationsParam): void;
    locations(params: Lists.LocationsParam, onsuccess: Mailchimp.SuccessCallback<Lists.LocationsResult[]>): void;
    locations(params: Lists.LocationsParam, onsuccess: Mailchimp.SuccessCallback<Lists.LocationsResult[]>, onerror: Mailchimp.ErrorCallback): void;

    /** Get the most recent 100 activities for particular list members (open, click, bounce, unsub, abuse, sent to, etc.) */
    memberActivity(params: Lists.MemberParam): void;
    memberActivity(params: Lists.MemberParam, onsuccess: Mailchimp.SuccessCallback<Lists.MemberActivityResult>): void;
    memberActivity(params: Lists.MemberParam, onsuccess: Mailchimp.SuccessCallback<Lists.MemberActivityResult>, onerror: Mailchimp.ErrorCallback): void;

    /** Get all the information for particular members of a list */
    memberInfo(params: Lists.MemberParam): void;
    memberInfo(params: Lists.MemberParam, onsuccess: Mailchimp.SuccessCallback<Lists.MemberInfoResult>): void;
    memberInfo(params: Lists.MemberParam, onsuccess: Mailchimp.SuccessCallback<Lists.MemberInfoResult>, onerror: Mailchimp.ErrorCallback): void;

    /** Get all of the list members for a list that are of a particular status and potentially matching a segment. This will cause locking, so don't run multiples at once. Are you trying to get a dump including lots of merge data or specific members of a list? If so, checkout the List Export API */
    members(params: Lists.MembersParam): void;
    members(params: Lists.MembersParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.TotalListResult<Lists.MemberDetails>>): void;
    members(params: Lists.MembersParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.TotalListResult<Lists.MemberDetails>>, onerror: Mailchimp.ErrorCallback): void;

    /** Add a new merge tag to a given list */
    mergeVarAdd(params: Lists.MergeVarAddParam): void;
    mergeVarAdd(params: Lists.MergeVarAddParam, onsuccess: Mailchimp.SuccessCallback<Lists.MergeVarDetails>): void;
    mergeVarAdd(params: Lists.MergeVarAddParam, onsuccess: Mailchimp.SuccessCallback<Lists.MergeVarDetails>, onerror: Mailchimp.ErrorCallback): void;

    /** Delete a merge tag from a given list and all its members. Seriously - the data is removed from all members as well! Note that on large lists this method may seem a bit slower than calls you typically make. */
    mergeVarDel(params: Lists.MergeVarParam): void;
    mergeVarDel(params: Lists.MergeVarParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.CompletedResult>): void;
    mergeVarDel(params: Lists.MergeVarParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.CompletedResult>, onerror: Mailchimp.ErrorCallback): void;

    /** Completely resets all data stored in a merge var on a list. All data is removed and this action can not be undone. */
    mergeVarReset(params: Lists.MergeVarParam): void;
    mergeVarReset(params: Lists.MergeVarParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.CompletedResult>): void;
    mergeVarReset(params: Lists.MergeVarParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.CompletedResult>, onerror: Mailchimp.ErrorCallback): void;

    /** Sets a particular merge var to the specified value for every list member. Only merge var ids 1 - 30 may be modified this way. This is generally a dirty method unless you're fixing data since you should probably be using default_values and/or conditional content. as with lists/merge-var-reset(), this can not be undone. */
    mergeVarSet(params: Lists.MergeVarSetParam): void;
    mergeVarSet(params: Lists.MergeVarSetParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.CompletedResult>): void;
    mergeVarSet(params: Lists.MergeVarSetParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.CompletedResult>, onerror: Mailchimp.ErrorCallback): void;

    /** Update most parameters for a merge tag on a given list. You cannot currently change the merge type */
    mergeVarUpdate(params: Lists.MergeVarAddParam): void;
    mergeVarUpdate(params: Lists.MergeVarAddParam, onsuccess: Mailchimp.SuccessCallback<Lists.MergeVarDetails>): void;
    mergeVarUpdate(params: Lists.MergeVarAddParam, onsuccess: Mailchimp.SuccessCallback<Lists.MergeVarDetails>, onerror: Mailchimp.ErrorCallback): void;

    /** Get the list of merge tags for a given list, including their name, tag, and required setting */
    mergeVars(params: Lists.MergeVarsParam): void;
    mergeVars(params: Lists.MergeVarsParam, onsuccess: Mailchimp.SuccessCallback<Lists.MergeVarsResult>): void;
    mergeVars(params: Lists.MergeVarsParam, onsuccess: Mailchimp.SuccessCallback<Lists.MergeVarsResult>, onerror: Mailchimp.ErrorCallback): void;

    /** Save a segment against a list for later use. There is no limit to the number of segments which can be saved. Static Segments are not tied to any merge data, interest groups, etc. They essentially allow you to configure an unlimited number of custom segments which will have standard performance. When using proper segments, Static Segments are one of the available options for segmentation just as if you used a merge var (and they can be used with other segmentation options), though performance may degrade at that point. Saved Segments (called "auto-updating" in the app) are essentially just the match+conditions typically used. */
    segmentAdd(params: Lists.SegmentAddParam): void;
    segmentAdd(params: Lists.SegmentAddParam, onsuccess: Mailchimp.SuccessCallback<Lists.SegmentAddResult>): void;
    segmentAdd(params: Lists.SegmentAddParam, onsuccess: Mailchimp.SuccessCallback<Lists.SegmentAddResult>, onerror: Mailchimp.ErrorCallback): void;

    /** Delete a segment. Note that this will, of course, remove any member affiliations with any static segments deleted */
    segmentDel(params: Lists.SegmentParam): void;
    segmentDel(params: Lists.SegmentParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.CompletedResult>): void;
    segmentDel(params: Lists.SegmentParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.CompletedResult>, onerror: Mailchimp.ErrorCallback): void;

    /** Allows one to test their segmentation rules before creating a campaign using them - this is no different from campaigns/segment-test() and will eventually replace it. For the time being, the crazy segmenting condition documentation will continue to live over there. */
    segmentTest(params: Lists.SegmentTestParam): void;
    segmentTest(params: Lists.SegmentTestParam, onsuccess: Mailchimp.SuccessCallback<Lists.SegmentTestResult>): void;
    segmentTest(params: Lists.SegmentTestParam, onsuccess: Mailchimp.SuccessCallback<Lists.SegmentTestResult>, onerror: Mailchimp.ErrorCallback): void;

    /** Update an existing segment. The list and type can not be changed. */
    segmentUpdate(params: Lists.SegmentUpdateParam): void;
    segmentUpdate(params: Lists.SegmentUpdateParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.CompletedResult>): void;
    segmentUpdate(params: Lists.SegmentUpdateParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.CompletedResult>, onerror: Mailchimp.ErrorCallback): void;

    /** Retrieve all of Segments for a list. */
    segments(params: Lists.SegmentsParam): void;
    segments(params: Lists.SegmentsParam, onsuccess: Mailchimp.SuccessCallback<Lists.SegmentsResult>): void;
    segments(params: Lists.SegmentsParam, onsuccess: Mailchimp.SuccessCallback<Lists.SegmentsResult>, onerror: Mailchimp.ErrorCallback): void;

    /** Save a segment against a list for later use. There is no limit to the number of segments which can be saved. Static Segments are not tied to any merge data, interest groups, etc. They essentially allow you to configure an unlimited number of custom segments which will have standard performance. When using proper segments, Static Segments are one of the available options for segmentation just as if you used a merge var (and they can be used with other segmentation options), though performance may degrade at that point. */
    staticSegmentAdd(params: Lists.StaticSegmentAddParam): void;
    staticSegmentAdd(params: Lists.StaticSegmentAddParam, onsuccess: Mailchimp.SuccessCallback<Lists.SegmentAddResult>): void;
    staticSegmentAdd(params: Lists.StaticSegmentAddParam, onsuccess: Mailchimp.SuccessCallback<Lists.SegmentAddResult>, onerror: Mailchimp.ErrorCallback): void;

    /** Delete a static segment. Note that this will, of course, remove any member affiliations with the segment */
    staticSegmentDel(params: Lists.SegmentParam): void;
    staticSegmentDel(params: Lists.SegmentParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.CompletedResult>): void;
    staticSegmentDel(params: Lists.SegmentParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.CompletedResult>, onerror: Mailchimp.ErrorCallback): void;

    /** Add list members to a static segment. It is suggested that you limit batch size to no more than 10,000 addresses per call. Email addresses must exist on the list in order to be included - this will not subscribe them to the list! */
    staticSegmentMembersAdd(params: Lists.StaticSegmentMembersAddDelParam): void;
    staticSegmentMembersAdd(params: Lists.StaticSegmentMembersAddDelParam, onsuccess: Mailchimp.SuccessCallback<Lists.StaticSegmentMembersAddDelResult>): void;
    staticSegmentMembersAdd(params: Lists.StaticSegmentMembersAddDelParam, onsuccess: Mailchimp.SuccessCallback<Lists.StaticSegmentMembersAddDelResult>, onerror: Mailchimp.ErrorCallback): void;

    /** Remove list members from a static segment. It is suggested that you limit batch size to no more than 10,000 addresses per call. Email addresses must exist on the list in order to be removed - this will not unsubscribe them from the list! */
    staticSegmentMembersDel(params: Lists.StaticSegmentMembersAddDelParam): void;
    staticSegmentMembersDel(params: Lists.StaticSegmentMembersAddDelParam, onsuccess: Mailchimp.SuccessCallback<Lists.StaticSegmentMembersAddDelResult>): void;
    staticSegmentMembersDel(params: Lists.StaticSegmentMembersAddDelParam, onsuccess: Mailchimp.SuccessCallback<Lists.StaticSegmentMembersAddDelResult>, onerror: Mailchimp.ErrorCallback): void;

    /** Resets a static segment - removes all members from the static segment. Note: does not actually affect list member data */
    staticSegmentReset(params: Lists.SegmentParam): void;
    staticSegmentReset(params: Lists.SegmentParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.CompletedResult>): void;
    staticSegmentReset(params: Lists.SegmentParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.CompletedResult>, onerror: Mailchimp.ErrorCallback): void;

    /** Retrieve all of the Static Segments for a list. */
    staticSegments(params: Lists.StaticSegmentsParam): void;
    staticSegments(params: Lists.StaticSegmentsParam, onsuccess: Mailchimp.SuccessCallback<Lists.StaticSegmentsResult[]>): void;
    staticSegments(params: Lists.StaticSegmentsParam, onsuccess: Mailchimp.SuccessCallback<Lists.StaticSegmentsResult[]>, onerror: Mailchimp.ErrorCallback): void;

    /** Subscribe the provided email to a list. By default this sends a confirmation email - you will not see new members until the link contained in it is clicked! */
    subscribe(params: Lists.SubscribeParam): void;
    subscribe(params: Lists.SubscribeParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.EmailIdentifier>): void;
    subscribe(params: Lists.SubscribeParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.EmailIdentifier>, onerror: Mailchimp.ErrorCallback): void;

    /** Unsubscribe the given email address from the list */
    unsubscribe(params: Lists.UnsubscribeParam): void;
    unsubscribe(params: Lists.UnsubscribeParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.CompletedResult>): void;
    unsubscribe(params: Lists.UnsubscribeParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.CompletedResult>, onerror: Mailchimp.ErrorCallback): void;

    /** Edit the email address, merge fields, and interest groups for a list member. If you are doing a batch update on lots of users, consider using lists/batch-subscribe() with the update_existing and possible replace_interests parameter. */
    updateMember(params: Lists.UpdateMemberParam): void;
    updateMember(params: Lists.UpdateMemberParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.EmailIdentifier>): void;
    updateMember(params: Lists.UpdateMemberParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.EmailIdentifier>, onerror: Mailchimp.ErrorCallback): void;

    /** Add a new Webhook URL for the given list */
    webhookAdd(params: Lists.WebhookAddParam): void;
    webhookAdd(params: Lists.WebhookAddParam, onsuccess: Mailchimp.SuccessCallback<Lists.WebhookAddResult>): void;
    webhookAdd(params: Lists.WebhookAddParam, onsuccess: Mailchimp.SuccessCallback<Lists.WebhookAddResult>, onerror: Mailchimp.ErrorCallback): void;

    /** Delete an existing Webhook URL from a given list */
    webhookDel(params: Lists.WebhookDelParam): void;
    webhookDel(params: Lists.WebhookDelParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.CompletedResult>): void;
    webhookDel(params: Lists.WebhookDelParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.CompletedResult>, onerror: Mailchimp.ErrorCallback): void;

    /** Return the Webhooks configured for the given list */
    webhooks(params: Lists.WebhooksParam): void;
    webhooks(params: Lists.WebhooksParam, onsuccess: Mailchimp.SuccessCallback<Lists.Webhook[]>): void;
    webhooks(params: Lists.WebhooksParam, onsuccess: Mailchimp.SuccessCallback<Lists.Webhook[]>, onerror: Mailchimp.ErrorCallback): void;
}
declare namespace Lists {
    
    export interface AbuseReportsParam extends Mailchimp.SimpleListParam {
        id: string;
    }
    export interface AbuseReport {
        date: string;
        email: string;
        campaign_id: string;
        type: string;
    }

    export interface ActivityParam {
        id: string;
    }
    export interface ActivityResult {
    }

    export interface BatchSubscribeEmail {
        email: Mailchimp.EmailIdentifier;
        email_type?: string;
        merge_vars?: SubscribeMergeVars;
    }
    export interface BatchSubscribeParam {
        id: string;
        batch: BatchSubscribeEmail[];
        double_optin?: boolean;
        update_exiting?: boolean;
        replace_interests?: boolean;
    }
    export interface BatchSubscribeError {
        email: Mailchimp.EmailIdentifier;
        code: number;
        error: string;
        row: BatchSubscribeEmail;
    }
    export interface BatchSubscribeResult {
        add_count: number;
        adds: Mailchimp.EmailIdentifier[];
        update_count: number;
        updates: Mailchimp.EmailIdentifier[];
        error_count: number;
        errors: BatchSubscribeError[];
    }

    export interface BatchUnsubscribeParam {
        id: string;
        batch: Mailchimp.EmailIdentifier[];
        delete_member?: boolean;
        say_goodbye?: boolean;
        send_notify?: boolean;
    }
    export interface BatchUnsubscribeError {
        email: Mailchimp.EmailIdentifier;
        code: number;
        error: string;
    }
    export interface BatchUnsubscribeResult {
        success_count: number;
        error_count: number;
        errors: BatchUnsubscribeError[];
    }

    export interface ClientsParam {
        id: string;
    }
    export interface Client {
        client: string;
        icon: string;
        percent: string;
        members: string;
    }
    export interface ClientsPlatform {
        penetration: number;
        clients: Client[];
    }
    export interface ClientsResult {
        desktop: ClientsPlatform;
        mobile: ClientsPlatform;
    }

    export interface GrowthHistoryParam {
        id?: string;
    }
    export interface GrowthHistoryResult {
        month: string;
        existing: number;
        imports: number;
        optins: number;
    }

    export interface InterestGroupAddDelParam {
        id: string;
        group_name: string;
        grouping_id?: number;
    }
    export interface InterestGroupUpdateParam {
        id: string;
        old_name: string;
        new_name: string;
        grouping_id?: number;
    }
    export interface InterestGroupingAddParam {
        id: string;
        name: string;
        type: string;
        groups: string[];
    }
    export interface InterestGroupingAddResult {
        id: number;
    }
    export interface InterestGroupingDelParam {
        grouping_id: number;
    }
    export interface InterestGroupingUpdateParam {
        grouping_id: number;
        name: string;
        value: string;
    }
    export interface GroupingsParam {
        id: string;
        count?: boolean;
    }
    export interface GroupingsGroup {
        bit: string;
        name: string;
        display_order: string;
        subscribers: number;
    }
    export interface Grouping {
        id: number;
        name: string;
        groups: GroupingsGroup[];
    }
    export interface GroupingsResult extends Grouping {
        form_field: string;
    }

    export interface ListParam extends Mailchimp.SortListParam {
        filters?: {
            list_id?: string;
            list_name?: string;
            from_name?: string;
            from_email?: string;
            from_subject?: string;
            created_before?: string;
            created_after?: string;
            exact?: boolean;
        };
    }
    export interface Stats {
        member_count: number;
        unsubscribe_count: number;
        cleaned_count: number;
        member_count_since_send: number;
        unsubscribe_count_since_send: number;
        cleaned_count_since_send: number;
        campaign_count: number;
        grouping_count: number;
        group_count: number;
        merge_var_count: number;
        avg_sub_rate: number;
        avg_unsub_rate: number;
        target_sub_rate: number;
        open_rate: number;
        click_rate: number;
    }
    export interface Details {
        id: string;
        web_id: number;
        name: string;
        date_created: string;
        email_type_option: boolean;
        use_awesomebar: boolean;
        default_from_name: string;
        default_from_email: string;
        default_subject: string;
        default_language: string;
        list_rating: number;
        subscribe_url_short: string;
        subscribe_url_long: string;
        beamer_address: string;
        visibility: string;

        stats: Stats;
    }
    export interface ListError {
        param: string;
        code: number;
        error: string;
    }
    export interface ListResult extends Mailchimp.TotalListResult<Details> {
        errors: ListError[];
    }

    export interface LocationsParam {
        id: string;
    }
    export interface LocationsResult {
        country: string;
        cc: string;
        percent: number;
        total: number;
    }

    export interface MemberParam {
        id: string;
        emails: Mailchimp.EmailIdentifier[];
    }
    export interface MembersOptions extends Mailchimp.SortListParam {
        segment?: SegmentOptions;
    }
    export interface MembersParam {
        id: string;
        status?: string;
        opts?: MembersOptions;
    }

    export interface MemberActivity {
        action: string;
        timestamp: string;
        url: string;
        type: string;
        campaign_id: string;
        campaign_data: any;
    }
    export interface MemberActivityData {
        email: Mailchimp.EmailIdentifier;
        activity: MemberActivity[];
    }
    export interface MemberActivityError {
        email: Mailchimp.EmailIdentifier;
        error: string;
        code: string;
    }
    export interface MemberActivityResult {
        success_count: number;
        error_count: number;
        errors: MemberActivityError[];
        data: MemberActivityData[];
    }

    export interface MemberMergeGroup {
        id: number;
        name: string;
        groups: {
            name: string;
            interested: boolean;
        }[];
    }
    export interface MemberList {
        id: string;
        status: string;
    }
    export interface MemberSegment {
        id: number;
        name: string;
        added: string;
    }
    export interface MemberNote {
        id: number;
        note: string;
        created: string;
        updated: string;
        created_by_name: string;
    }
    export interface MemberDetails {
        id: string;
        email: string;
        email_type: string;

        merges: {
            [key: string]: any;
            GROUPINGS: MemberMergeGroup[];
        };

        status: string;
        ip_signup: string;
        timestamp_signup: string;
        ip_opt: string;
        timestamp_opt: string;
        member_rating: number;
        campaign_id: string;

        lists: MemberList[];

        timestamp: string;
        info_changed: string;
        web_id: number;
        leid: number;
        list_id: string;
        list_name: string;
        language: string;
        is_gmonkey: boolean;

        geo: Mailchimp.ActivityGeo;

        clients: {
            name: string;
            icon_url: string;
        };

        static_segments: MemberSegment[];
        notes: MemberNote[];
    }
    export interface MemberError {
        email: Mailchimp.EmailIdentifier;
        error: string;
    }
    export interface MemberInfoResult {
        success_count: number;
        error_count: number;
        errors: MemberError[];
        data: MemberDetails[];
    }

    export interface MergeVarParam {
        id: string;
        tag: string;
    }
    export interface MergeVarAddParam extends MergeVarParam {
        name: string;

        options?: {
            field_type?: string;
            req?: boolean;
            public?: boolean;
            show?: boolean;
            order: number;
            default_value?: string;
            helptext?: string;
            choices?: string[];
            dateformat?: string;
            phoneformat?: string;
            defaultcountry?: string;
        };
    }
    export interface MergeVarSetParam extends MergeVarParam {
        value: string;
    }
    export interface MergeVarsParam {
        id: string[];
    }
    export interface MergeVarDetails {
        id: number;
        name: string;
        req: boolean;
        field_type: string;
        public: boolean;
        show: boolean;
        order: string;
        default: string;
        helptext: string;
        size: string;
        tag: string;
        choices: string[];
    }
    export interface MergeVarError {
        id: string;
        code: number;
        msg: string;
    }
    export interface MergeVarsResult {
        success_count: number;
        error_count: number;
        data: MergeVarDetails[];
        errors: MergeVarError[];
    }

    export interface SegmentCondition {
        field: string;
        op: string;
        value: string;
        extra?: string;
    }
    export interface SegmentOptions {
        match: string;
        conditions: SegmentCondition[];
    }
    export interface Segment {
        id: number;
        name: string;
        created_date: string;
        last_update: string;
    }
    export interface SegmentSaved extends Segment {
        segment_opts: SegmentOptions;
        segment_text: string;
    }
    export interface SegmentStatic extends Segment {
        last_reset: string;
    }

    export interface SegmentParam {
        id: string;
        seg_id: number;
    }
    export interface SegmentAddParam {
        id: string;
        opts: {
            type: string;
            name: string;
            segment_opts?: SegmentOptions;
        };
    }
    export interface SegmentAddResult {
        id: number;
    }
    export interface SegmentTestParam {
        list_id: string;
        options: { saved_segment_id: string } | SegmentOptions;
    }
    export interface SegmentTestResult {
        total: number;
    }
    export interface SegmentUpdateParam extends SegmentParam {
        opts: {
            name: string;
            segment_opts?: SegmentOptions;
        };
    }
    export interface SegmentsParam {
        id: string;
        type?: string;
    }
    export interface SegmentsResult {
        static: SegmentStatic[];
        saved: SegmentSaved[];
    }

    export interface StaticSegmentAddParam {
        id: string;
        name: string;
    }
    export interface StaticSegmentMembersAddDelParam extends SegmentParam {
        batch: Mailchimp.EmailIdentifier[];
    }
    export interface StaticSegmentMembersAddDelError {
        email: Mailchimp.EmailIdentifier;
        code: string;
        error: string;
    }
    export interface StaticSegmentMembersAddDelResult {
        success_count: number;
        error_count: number;
        errors: StaticSegmentMembersAddDelError[];
    }
    export interface StaticSegmentsParam {
        id: string;
        get_counts?: boolean;
        start?: number;
        limit?: number;
    }
    export interface StaticSegmentsResult extends SegmentStatic {
        member_count: number;
    }

    export interface SubscribeMergeVarsNote {
        id?: number;
        note: string;
        action?: string;
    }
    export interface SubscribeMergeVars {
        [key: string]: any;
        "new-email"?: string;
        groupings?: Grouping[];
        optin_ip?: string;
        optin_time?: string;
        mc_location?: {
            longitude?: string;
            latitude?: string;
            anything?: string;
        };
        mc_language?: string;
        mc_notes?: SubscribeMergeVarsNote[];
        address?: string | string[];
        birthday?: string;
        date?: string;
        dropdown?: string;
        image?: string;
        multi_choice?: string;
        number?: number;
        phone?: string;
        website?: string;
        zip?: string;
        fname: string;
        lname: string;
    }
    export interface SubscribeParam {
        id: string;
        email: Mailchimp.EmailIdentifier;
        merge_vars?: SubscribeMergeVars;
        email_type?: string;
        double_optin?: boolean;
        update_existing?: boolean;
        replace_interests?: boolean;
        send_welcome?: boolean;
    }
    export interface UnsubscribeParam {
        id: string;
        email: Mailchimp.EmailIdentifier;
        delete_member?: boolean;
        send_goodbye?: boolean;
        send_notify?: boolean;
    }

    export interface UpdateMemberParam {
        id: string;
        email: Mailchimp.EmailIdentifier;
        merge_vars: SubscribeMergeVars;
        email_type?: string;
        replace_interests?: boolean;
    }

    export interface Webhook {
        url: string;

        actions?: {
            subscribe?: boolean;
            unsubscribe?: boolean;
            profile?: boolean;
            cleaned?: boolean;
            upemail?: boolean;
            campaign?: boolean;
        };

        sources?: {
            user?: boolean;
            admin?: boolean;
            api?: boolean;
        };
    }
    export interface WebhookAddParam extends Webhook {
        id: string;
    }
    export interface WebhookAddResult {
        id: number;
    }
    export interface WebhookDelParam {
        id: string;
        url: string;
    }
    export interface WebhooksParam {
        id: string;
    }
}

declare class Campaigns {
    master: Mailchimp;

    constructor(master: Mailchimp);

    /** Get the content (both html and text) for a campaign either as it would appear in the campaign archive or as the raw, original content */
    content(params: Campaigns.ContentParam): void;
    content(params: Campaigns.ContentParam, onsuccess: Mailchimp.SuccessCallback<Campaigns.ContentResult>): void;
    content(params: Campaigns.ContentParam, onsuccess: Mailchimp.SuccessCallback<Campaigns.ContentResult>, onerror: Mailchimp.ErrorCallback): void;

    /** Create a new draft campaign to send. You can not have more than 32,000 campaigns in your account. */
    create(params: Campaigns.CreateParam): void;
    create(params: Campaigns.CreateParam, onsuccess: Mailchimp.SuccessCallback<Campaigns.Details>): void;
    create(params: Campaigns.CreateParam, onsuccess: Mailchimp.SuccessCallback<Campaigns.Details>, onerror: Mailchimp.ErrorCallback): void;

    /** Delete a campaign. Seriously, "poof, gone!" - be careful! Seriously, no one can undelete these. */
    delete(params: Campaigns.Param): void;
    delete(params: Campaigns.Param, onsuccess: Mailchimp.SuccessCallback<Mailchimp.CompletedResult>): void;
    delete(params: Campaigns.Param, onsuccess: Mailchimp.SuccessCallback<Mailchimp.CompletedResult>, onerror: Mailchimp.ErrorCallback): void;

    /** Get the list of campaigns and their details matching the specified filters */
    list(params: Campaigns.ListParam): void;
    list(params: Campaigns.ListParam, onsuccess: Mailchimp.SuccessCallback<Campaigns.ListResult>): void;
    list(params: Campaigns.ListParam, onsuccess: Mailchimp.SuccessCallback<Campaigns.ListResult>, onerror: Mailchimp.ErrorCallback): void;

    /** Pause an AutoResponder or RSS campaign from sending */
    pause(params: Campaigns.Param): void;
    pause(params: Campaigns.Param, onsuccess: Mailchimp.SuccessCallback<Mailchimp.CompletedResult>): void;
    pause(params: Campaigns.Param, onsuccess: Mailchimp.SuccessCallback<Mailchimp.CompletedResult>, onerror: Mailchimp.ErrorCallback): void;

    /** Returns information on whether a campaign is ready to send and possible issues we may have detected with it - very similar to the confirmation step in the app. */
    ready(params: Campaigns.Param): void;
    ready(params: Campaigns.Param, onsuccess: Mailchimp.SuccessCallback<Campaigns.ReadyResult>): void;
    ready(params: Campaigns.Param, onsuccess: Mailchimp.SuccessCallback<Campaigns.ReadyResult>, onerror: Mailchimp.ErrorCallback): void;

    /** Replicate a campaign. */
    replicate(params: Campaigns.Param): void;
    replicate(params: Campaigns.Param, onsuccess: Mailchimp.SuccessCallback<Campaigns.Details>): void;
    replicate(params: Campaigns.Param, onsuccess: Mailchimp.SuccessCallback<Campaigns.Details>, onerror: Mailchimp.ErrorCallback): void;

    /** Resume sending an AutoResponder or RSS campaign */
    resume(params: Campaigns.Param): void;
    resume(params: Campaigns.Param, onsuccess: Mailchimp.SuccessCallback<Mailchimp.CompletedResult>): void;
    resume(params: Campaigns.Param, onsuccess: Mailchimp.SuccessCallback<Mailchimp.CompletedResult>, onerror: Mailchimp.ErrorCallback): void;

    /** Schedule a campaign to be sent in the future */
    schedule(params: Campaigns.ScheduleParam): void;
    schedule(params: Campaigns.ScheduleParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.CompletedResult>): void;
    schedule(params: Campaigns.ScheduleParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.CompletedResult>, onerror: Mailchimp.ErrorCallback): void;

    /** Schedule a campaign to be sent in batches sometime in the future. Only valid for "regular" campaigns */
    scheduleBatch(params: Campaigns.ScheduleBatchParam): void;
    scheduleBatch(params: Campaigns.ScheduleBatchParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.CompletedResult>): void;
    scheduleBatch(params: Campaigns.ScheduleBatchParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.CompletedResult>, onerror: Mailchimp.ErrorCallback): void;

    /** Allows one to test their segmentation rules before creating a campaign using them - this is no different from campaigns/segment-test() and will eventually replace it. For the time being, the crazy segmenting condition documentation will continue to live over there. */
    segmentTest(params: Lists.SegmentTestParam): void;
    segmentTest(params: Lists.SegmentTestParam, onsuccess: Mailchimp.SuccessCallback<Lists.SegmentTestResult>): void;
    segmentTest(params: Lists.SegmentTestParam, onsuccess: Mailchimp.SuccessCallback<Lists.SegmentTestResult>, onerror: Mailchimp.ErrorCallback): void;

    /** Send a given campaign immediately. For RSS campaigns, this will "start" them. */
    send(params: Campaigns.Param): void;
    send(params: Campaigns.Param, onsuccess: Mailchimp.SuccessCallback<Mailchimp.CompletedResult>): void;
    send(params: Campaigns.Param, onsuccess: Mailchimp.SuccessCallback<Mailchimp.CompletedResult>, onerror: Mailchimp.ErrorCallback): void;

    /** Send a test of this campaign to the provided email addresses */
    sendTest(params: Campaigns.SendTestParam): void;
    sendTest(params: Campaigns.SendTestParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.CompletedResult>): void;
    sendTest(params: Campaigns.SendTestParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.CompletedResult>, onerror: Mailchimp.ErrorCallback): void;

    /** Get the HTML template content sections for a campaign. Note that this will return very jagged, non-standard results based on the template a campaign is using. You only want to use this if you want to allow editing template sections in your application. */
    templateContent(params: Campaigns.Param): void;
    templateContent(params: Campaigns.Param, onsuccess: Mailchimp.SuccessCallback<Campaigns.TemplateContentResult>): void;
    templateContent(params: Campaigns.Param, onsuccess: Mailchimp.SuccessCallback<Campaigns.TemplateContentResult>, onerror: Mailchimp.ErrorCallback): void;

    /** Unschedule a campaign that is scheduled to be sent in the future */
    unschedule(params: Campaigns.Param): void;
    unschedule(params: Campaigns.Param, onsuccess: Mailchimp.SuccessCallback<Mailchimp.CompletedResult>): void;
    unschedule(params: Campaigns.Param, onsuccess: Mailchimp.SuccessCallback<Mailchimp.CompletedResult>, onerror: Mailchimp.ErrorCallback): void;

    /**
     * Update just about any setting besides type for a campaign that has not been sent. See campaigns/create() for details. Caveats:
     * - If you set a new list_id, all segmentation options will be deleted and must be re-added.
     * - If you set template_id, you need to follow that up by setting it's 'content'
     * - If you set segment_opts, you should have tested your options against campaigns/segment-test().
     * - To clear/unset segment_opts, pass an empty string or array as the value. Various wrappers may require one or the other.
     */
    update(params: Campaigns.UpdateParam): void;
    update(params: Campaigns.UpdateParam, onsuccess: Mailchimp.SuccessCallback<Campaigns.UpdateResult>): void;
    update(params: Campaigns.UpdateParam, onsuccess: Mailchimp.SuccessCallback<Campaigns.UpdateResult>, onerror: Mailchimp.ErrorCallback): void;
}
declare namespace Campaigns {
    
    export interface Options {
        subject: string;
        from_email: string;
        from_name: string;
        to_name: string;
        template_id?: number;
        folder_id?: number;

        tracking?: {
            opens?: boolean;
            html_clicks?: boolean;
            text_clicks?: boolean;
        };

        title?: string;
        authenticate?: boolean;
        auto_footer?: boolean;
        inline_css?: boolean;
        auto_tweet?: boolean;
    }
    export interface Details extends Options {
        id: string;
        web_id: number;
        list_id: string;
        content_type: string;
        type: string;
        create_time: string;
        emails_sent: number;
        status: string;
        archive_url: string;
        analytics: string;
        analytics_tag: string;
        auto_fb_post: string;
        timewarp_schedule: string;
        parent_id: string;
        is_child: boolean;
        tests_sent: string;
        tests_remain: number;

        segment_text: string;
        segment_opts: string[];

        saved_segment: {
            id: number;
            type: string;
            name: string;
        };

        type_opts: any;
        comments_total: number;
        comments_unread: number;
        summary: any;

        social_card: {
            title: string;
            description: string;
            image_url: string;
            enabled: string;
        };
    }

    export interface Param {
        cid: string;
    }

    export interface ContentParam extends Param {
        options?: {
            view?: string;
            email?: Mailchimp.EmailIdentifier;
        };
    }
    export interface ContentResult {
        html: string;
        text: string;
    }

    export interface CreateOptions extends Options {
        list_id: string;
        gallery_template_id?: string;
        base_template_id?: string;

        analytics?: {
            google?: string;
            clicktale?: string;
            gooal?: string;
        };

        generate_text?: string;
        auto_fb_post?: string[];
        fb_comments?: boolean;
    }
    export interface CreateContent {
        html?: string;
        text?: string;

        sections: {
            [name: string]: string;
        };

        url?: string;
        archive?: string;
        archive_type?: string;
    }
    export interface CreateTypeRssOptions {
        url: string;
        schedule?: string;
        schedule_hour?: number|string;
        schedule_weekday?: string;
        schedule_monthday?: string;

        days?: {
            1?: boolean;
            2?: boolean;
            3?: boolean;
            4?: boolean;
            5?: boolean;
            6?: boolean;
            7?: boolean;
        };
    }
    export interface CreateTypeAbsSplitOptions {
        split_test: string;
        pick_winner: string;
        wait_units?: number;
        wait_time?: number;
        split_size?: number;
        from_name_a?: string;
        from_name_b?: string;
        from_email_a?: string;
        from_email_b?: string;
        subject_a?: string;
        subject_b?: string;
    }
    export interface CreateTypeAutoOptions {
        "offset-units": string;
        "offset-dir": string;
        "offset-time"?: string;
        "event"?: string;
        "event-datemerge"?: string;
        campaign_id?: string;
        campaign_url?: string;
        scheduler_hour?: number;
        use_import_time?: boolean;

        days?: {
            1?: boolean;
            2?: boolean;
            3?: boolean;
            4?: boolean;
            5?: boolean;
            6?: boolean;
            7?: boolean;
        };
    }
    export interface CreateTypeOptions {
        rss?: CreateTypeRssOptions;
        abssplit?: CreateTypeAbsSplitOptions;
        auto?: CreateTypeAutoOptions;
    }
    export interface CreateParam {
        type: string;
        options: CreateOptions;
        content: CreateContent;
        segment_opts?: Lists.SegmentOptions;
        type_opts?: CreateTypeOptions;
    }

    export interface ListParam extends Mailchimp.SortListParam {
        filters?: {
            campaign_id?: string;
            parent_id?: string;
            list_id?: string;
            folder_id?: string;
            template_id?: number;
            status?: string;
            type?: string;
            from_name?: string;
            from_email?: string;
            title?: string;
            subject?: string;
            sendtime_start?: string;
            sendtime_end?: string;
            uses_segement?: boolean;
            exact?: boolean;
        };
    }
    export interface ListError {
        filter: string;
        value: string;
        code: number;
        error: string;
    }
    export interface ListResult extends Mailchimp.TotalListResult<Details> {
        errors: ListError[];
    }

    export interface ReadyResult {
        is_ready: boolean;

        items: {
            type: string;
            heading: string;
            details: string;
        }[];
    }

    export interface ScheduleParam extends Param {
        schedule_time: string;
        schedule_time_b?: string;
    }
    export interface ScheduleBatchParam extends Param {
        schedule_time: string;
        num_batches?: number;
        stagger_mins?: number;
    }

    export interface SendTestParam extends Param {
        test_emails?: string[];
        send_type?: string;
    }
    export interface TemplateContentResult {
        [key: string]: string;
    }

    export interface UpdateParam extends Param {
        name: string;

        value: (CreateOptions
            | CreateContent
            | Lists.SegmentOptions
            | CreateTypeRssOptions
            | CreateTypeAbsSplitOptions
            | CreateTypeAutoOptions)[];
    }
    export interface UpdateError {
        code: number;
        message: string;
        name: string;
    }
    export interface UpdateResult {
        data: Details;
        errors: UpdateError[];
    }
}

declare class Vip {
    master: Mailchimp;

    constructor(master: Mailchimp);

    /** Retrieve all Activity (opens/clicks) for VIPs over the past 10 days */
    activity(params: {}): void;
    activity(params: {}, onsuccess: Mailchimp.SuccessCallback<Vip.ActivityResult[]>): void;
    activity(params: {}, onsuccess: Mailchimp.SuccessCallback<Vip.ActivityResult[]>, onerror: Mailchimp.ErrorCallback): void;

    /** Add VIPs (previously called Golden Monkeys) */
    add(params: Vip.AddDelParam): void;
    add(params: Vip.AddDelParam, onsuccess: Mailchimp.SuccessCallback<Vip.AddDelResult>): void;
    add(params: Vip.AddDelParam, onsuccess: Mailchimp.SuccessCallback<Vip.AddDelResult>, onerror: Mailchimp.ErrorCallback): void;

    /** Remove VIPs - this does not affect list membership */
    del(params: Vip.AddDelParam): void;
    del(params: Vip.AddDelParam, onsuccess: Mailchimp.SuccessCallback<Vip.AddDelResult>): void;
    del(params: Vip.AddDelParam, onsuccess: Mailchimp.SuccessCallback<Vip.AddDelResult>, onerror: Mailchimp.ErrorCallback): void;

    /** Retrieve all Golden Monkey(s) for an account */
    members(params: {}): void;
    members(params: {}, onsuccess: Mailchimp.SuccessCallback<Vip.MemberResult[]>): void;
    members(params: {}, onsuccess: Mailchimp.SuccessCallback<Vip.MemberResult[]>, onerror: Mailchimp.ErrorCallback): void;
}
declare namespace Vip {
    export interface ActivityResult {
        action: string;
        timestamp: string;
        url?: string;
        unique_id: string;
        title: string;
        list_name: string;
        list_id: string;
        email: string;
        fname?: string;
        lname?: string;
        member_rating: number;
        member_since: string;

        geo: Mailchimp.ActivityGeo;
    }

    export interface AddDelParam {
        id: string;
        emails: Mailchimp.EmailIdentifier[];
    }
    export interface Error {
        email: Mailchimp.EmailIdentifier;
        code: string;
        error: string;
    }
    export interface AddDelResult {
        success_count: number;
        error_count: number;
        data: Mailchimp.EmailIdentifier[];
        errors: Error[];
    }

    export interface MemberResult {
        list_id: string;
        list_name: string;
        email: string;
        fname?: string;
        lname?: string;
        member_rating: number;
        member_since: string;
    }
}

declare class Reports {
    master: Mailchimp;

    constructor(master: Mailchimp);

    /** Get all email addresses that complained about a given campaign */
    abuse(params: Reports.ListParam): void;
    abuse(params: Reports.ListParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.TotalListResult<Reports.AbuseResult>>): void;
    abuse(params: Reports.ListParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.TotalListResult<Reports.AbuseResult>>, onerror: Mailchimp.ErrorCallback): void;

    /** Retrieve the text presented in our app for how a campaign performed and any advice we may have for you - best suited for display in customized reports pages. Note: some messages will contain HTML - clean tags as necessary */
    advice(params: Campaigns.Param): void;
    advice(params: Campaigns.Param, onsuccess: Mailchimp.SuccessCallback<Reports.AdviceResult[]>): void;
    advice(params: Campaigns.Param, onsuccess: Mailchimp.SuccessCallback<Reports.AdviceResult[]>, onerror: Mailchimp.ErrorCallback): void;

    /** Retrieve the most recent full bounce message for a specific email address on the given campaign. Messages over 30 days old are subject to being removedt */
    bounceMessage(params: Reports.BounceMessageParam): void;
    bounceMessage(params: Reports.BounceMessageParam, onsuccess: Mailchimp.SuccessCallback<Reports.BounceMessageResult>): void;
    bounceMessage(params: Reports.BounceMessageParam, onsuccess: Mailchimp.SuccessCallback<Reports.BounceMessageResult>, onerror: Mailchimp.ErrorCallback): void;

    /** Retrieve the full bounce messages for the given campaign. Note that this can return very large amounts of data depending on how large the campaign was and how much cruft the bounce provider returned. Also, messages over 30 days old are subject to being removed */
    bounceMessages(params: Reports.ListParam): void;
    bounceMessages(params: Reports.ListParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.TotalListResult<Reports.BounceMessageResult>>): void;
    bounceMessages(params: Reports.ListParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.TotalListResult<Reports.BounceMessageResult>>, onerror: Mailchimp.ErrorCallback): void;

    /** Return the list of email addresses that clicked on a given url, and how many times they clicked */
    clickDetail(params: Reports.SortListParam): void;
    clickDetail(params: Reports.SortListParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.TotalListResult<Reports.ClickDetailResult>>): void;
    clickDetail(params: Reports.SortListParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.TotalListResult<Reports.ClickDetailResult>>, onerror: Mailchimp.ErrorCallback): void;

    /** The urls tracked and their click counts for a given campaign. */
    clicks(params: Campaigns.Param): void;
    clicks(params: Campaigns.Param, onsuccess: Mailchimp.SuccessCallback<Reports.ClicksResult>): void;
    clicks(params: Campaigns.Param, onsuccess: Mailchimp.SuccessCallback<Reports.ClicksResult>, onerror: Mailchimp.ErrorCallback): void;

    /** Get the top 5 performing email domains for this campaign. Users wanting more than 5 should use campaign reports/member-activity() or campaignEmailStatsAIMAll() and generate any additional stats they require. */
    domainPerformance(params: Campaigns.Param): void;
    domainPerformance(params: Campaigns.Param, onsuccess: Mailchimp.SuccessCallback<Reports.DomainPerformanceResult[]>): void;
    domainPerformance(params: Campaigns.Param, onsuccess: Mailchimp.SuccessCallback<Reports.DomainPerformanceResult[]>, onerror: Mailchimp.ErrorCallback): void;

    /** Retrieve the Ecommerce Orders tracked by ecomm/order-add() */
    Orders(params: Reports.ListParam): void;
    Orders(params: Reports.ListParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.TotalListResult<Ecomm.OrderDetails>>): void;
    Orders(params: Reports.ListParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.TotalListResult<Ecomm.OrderDetails>>, onerror: Mailchimp.ErrorCallback): void;

    /** Retrieve the eepurl stats from the web/Twitter mentions for this campaign */
    eepurl(params: Campaigns.Param): void;
    eepurl(params: Campaigns.Param, onsuccess: Mailchimp.SuccessCallback<Reports.EepurlResult>): void;
    eepurl(params: Campaigns.Param, onsuccess: Mailchimp.SuccessCallback<Reports.EepurlResult>, onerror: Mailchimp.ErrorCallback): void;

    /** Retrieve the countries/regions and number of opens tracked for each. Email address are not returned. */
    geoOpens(params: Campaigns.Param): void;
    geoOpens(params: Campaigns.Param, onsuccess: Mailchimp.SuccessCallback<Reports.GeoOpensResult[]>): void;
    geoOpens(params: Campaigns.Param, onsuccess: Mailchimp.SuccessCallback<Reports.GeoOpensResult[]>, onerror: Mailchimp.ErrorCallback): void;

    /** Retrieve the Google Analytics data we've collected for this campaign. Note, requires Google Analytics Add-on to be installed and configured. */
    googleAnalytics(params: Campaigns.Param): void;
    googleAnalytics(params: Campaigns.Param, onsuccess: Mailchimp.SuccessCallback<Reports.GoogleAnalyticsResult[]>): void;
    googleAnalytics(params: Campaigns.Param, onsuccess: Mailchimp.SuccessCallback<Reports.GoogleAnalyticsResult[]>, onerror: Mailchimp.ErrorCallback): void;

    /** Given a campaign and email address, return the entire click and open history with timestamps, ordered by time. If you need to dump the full activity for a campaign and/or get incremental results, you should use the campaignSubscriberActivity Export API method, not this, especially for large campaigns. */
    memberActivity(params: Reports.MemberActivityParam): void;
    memberActivity(params: Reports.MemberActivityParam, onsuccess: Mailchimp.SuccessCallback<Reports.MemberActivityResult>): void;
    memberActivity(params: Reports.MemberActivityParam, onsuccess: Mailchimp.SuccessCallback<Reports.MemberActivityResult>, onerror: Mailchimp.ErrorCallback): void;

    /** Retrieve the list of email addresses that did not open a given campaign */
    notOpened(params: Reports.ListParam): void;
    notOpened(params: Reports.ListParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.TotalListResult<Lists.MemberDetails>>): void;
    notOpened(params: Reports.ListParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.TotalListResult<Lists.MemberDetails>>, onerror: Mailchimp.ErrorCallback): void;

    /** Retrieve the list of email addresses that opened a given campaign with how many times they opened */
    opened(params: Reports.SortListParam): void;
    opened(params: Reports.SortListParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.TotalListResult<Reports.OpenedResult>>): void;
    opened(params: Reports.SortListParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.TotalListResult<Reports.OpenedResult>>, onerror: Mailchimp.ErrorCallback): void;

    /** Get email addresses the campaign was sent to */
    sentTo(params: Reports.SentToParam): void;
    sentTo(params: Reports.SentToParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.TotalListResult<Reports.SentToResult>>): void;
    sentTo(params: Reports.SentToParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.TotalListResult<Reports.SentToResult>>, onerror: Mailchimp.ErrorCallback): void;

    /** Get the URL to a customized VIP Report for the specified campaign and optionally send an email to someone with links to it. Note subsequent calls will overwrite anything already set for the same campign (eg, the password) */
    share(params: Reports.ShareParam): void;
    share(params: Reports.ShareParam, onsuccess: Mailchimp.SuccessCallback<Reports.ShareResult>): void;
    share(params: Reports.ShareParam, onsuccess: Mailchimp.SuccessCallback<Reports.ShareResult>, onerror: Mailchimp.ErrorCallback): void;

    /** Retrieve relevant aggregate campaign statistics (opens, bounces, clicks, etc.) */
    summary(params: Campaigns.Param): void;
    summary(params: Campaigns.Param, onsuccess: Mailchimp.SuccessCallback<Reports.SummaryResult>): void;
    summary(params: Campaigns.Param, onsuccess: Mailchimp.SuccessCallback<Reports.SummaryResult>, onerror: Mailchimp.ErrorCallback): void;

    /** Get all unsubscribed email addresses for a given campaign */
    unsubscribes(params: Reports.ListParam): void;
    unsubscribes(params: Reports.ListParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.TotalListResult<Reports.UnsubscribesResult>>): void;
    unsubscribes(params: Reports.ListParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.TotalListResult<Reports.UnsubscribesResult>>, onerror: Mailchimp.ErrorCallback): void;

}
declare namespace Reports {
    
    export interface Result {
        date: string;
    }
    export interface MemberResult extends Result {
        member: string;
    }

    export interface ListParam extends Campaigns.Param {
        opts?: Mailchimp.SimpleListParam;
    }
    export interface SortListParam extends Campaigns.Param {
        tid: string;
        opts?: Mailchimp.SortListParam;
    }

    export interface AbuseResult extends MemberResult {
        type: string;
    }
    export interface AdviceResult {
        message: string;
        type: string;
    }

    export interface BounceMessageParam extends Campaigns.Param {
        cid: string;
        email: Mailchimp.EmailIdentifier;
    }
    export interface BounceMessageResult extends MemberResult {
        message: string;
    }

    export interface ClickDetailResult {
        member: Lists.MemberDetails;
        clicks: number;
    }

    export interface ClicksDetail {
        tid: number;
        url: string;
        clicks: number;
        clicks_percent: number;
        unique: number;
        unique_percent: number;
    }
    export interface ClicksResult {
        total: ClicksDetail[];
        a: ClicksDetail[];
        b: ClicksDetail[];
    }

    export interface DomainPerformanceResult {
        domain: string;
        total_sent: number;
        emails: number;
        bounces: number;
        opens: number;
        clicks: number;
        unsubs: number;
        delivered: number;
        emails_pct: number;
        bounches_pct: number;
        opens_pct: number;
        clicks_pct: number;
        unsubs_pct: number;
    }
    export interface EepurlResult {
        twitter: {
            tweets: number;
            first_tweet: string;
            last_tweet: string;
            retweets: number;
            first_retweet: string;
            last_retweet: string;
            statuses: {
                status: string;
                screen_name: string;
                status_id: string;
                datetime: string;
                is_retweet: boolean;
            }[];
        };

        clicks: {
            clicks: number;
            first_click: string;
            last_click: string;
            locations: {
                country: string;
                region: string;
            }[];
        };

        referrers: {
            referrer: string;
            clicks: number;
            first_click: string;
            last_click: string;
        }[];
    }
    export interface GeoOpensResult {
        code: string;
        name: string;
        opens: number;

        regions: {
            code: string;
            name: string;
            opens: number;
        }[];
    }
    export interface GoogleAnalyticsResult {
        visits: number;
        pages: number;
        new_visits: number;
        bounces: number;
        time_on_site: number;
        goal_conversions: number;
        goal_value: number;
        revenue: number;
        transactions: number;
        ecomm_conversions: number;
        goals: {
            name: string;
            conversions: number;
        }[];
    }

    export interface MemberActivityParam {
        cid: string;
        emails: Mailchimp.EmailIdentifier[];
    }
    export interface MemberActivityError {
        email: Mailchimp.EmailIdentifier;
        msg: string;
    }
    export interface MemberActivity {
        email: Mailchimp.EmailIdentifier;
        member: Lists.MemberDetails;
        activity: {
            action: string;
            timestamp: string;
            url?: string;
            ip: string;
        }[];
    }
    export interface MemberActivityResult {
        success_count: number;
        error_count: number;
        errors: MemberActivityError[];
        data: MemberActivity[];
    }

    export interface OpenedResult {
        member: Lists.MemberDetails;
        opens: number;
    }

    export interface SentToParam extends Campaigns.Param {
        opts?: {
            status?: string;
            limit?: number;
            start?: number;
        };
    }
    export interface SentToResult {
        member: Lists.MemberDetails;
        status: string;
        absplit_group?: string;
        tz_group?: string;
    }

    export interface ShareParam extends Campaigns.Param {
        opts?: {
            to_email?: string;
            theme_id?: number;
            css_url?: string;
        };
    }
    export interface ShareResult {
        title: string;
        url: string;
        secure_url: string;
        password?: string;
    }

    export interface SummaryResult {
        syntax_errors: number;
        hard_bounces: number;
        soft_bounces: number;
        unsubscribes: number;
        abuse_reports: number;
        forwards: number;
        forwards_opens: number;
        opens: number;
        last_open: string;
        unique_opens: number;
        clicks: number;
        unique_clicks: number;
        last_click: string;
        users_who_clicked: number;
        emails_sent: number;
        unique_likes: number;
        recipient_likes: number;
        facebook_likes: number;

        industry: {
            type: string;
            open_rate: number;
            click_rate: number;
            bounce_rate: number;
            unopen_rate: number;
            unsub_rate: number;
            abuse_rate: number;
        };

        abssplit?: {
            bounces_a: number;
            bounces_b: number;
            forwards_a: number;
            forwards_b: number;
            abuse_reports_a: number;
            abuse_reports_b: number;
            unsubs_a: number;
            unsubs_b: number;
            recipients_click_a: number;
            recipients_click_b: number;
            forwards_opens_a: number;
            forwards_opens_b: number;
            opens_a: number;
            opens_b: number;
            last_open_a: string;
            last_open_b: string;
            unique_opens_a: number;
            unique_opens_b: number;
        };

        timewarp?: {
            opens: number;
            last_open: string;
            unique_opens: number;
            clicks: number;
            last_click: string;
            unique_clicks: number;
            bounces: number;
            total: number;
            sent: number;
        }[];

        timeseries: {
            timestamp: string;
            emails_sent: number;
            unique_opens: number;
            recipients_click: number;
        }[];
    }
    export interface UnsubscribesResult {
        member: string;
        reason: string;
        reason_text: string;
    }
}

declare class Gallery {
    master: Mailchimp;

    constructor(master: Mailchimp);

    /** Add a file to a folder. */
    addFileToFolder(params: Gallery.FolderFileParam): void;
    addFileToFolder(params: Gallery.FolderFileParam, onsuccess: Mailchimp.SuccessCallback<boolean>): void;
    addFileToFolder(params: Gallery.FolderFileParam, onsuccess: Mailchimp.SuccessCallback<boolean>, onerror: Mailchimp.ErrorCallback): void;

    /** Adds a folder to the file gallery. */
    addFolder(params: Gallery.FolderAddParam): void;
    addFolder(params: Gallery.FolderAddParam, onsuccess: Mailchimp.SuccessCallback<Gallery.FolderAddResult>): void;
    addFolder(params: Gallery.FolderAddParam, onsuccess: Mailchimp.SuccessCallback<Gallery.FolderAddResult>, onerror: Mailchimp.ErrorCallback): void;

    /** Return a section of the image gallery. */
    list(params: Gallery.ListParam): void;
    list(params: Gallery.ListParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.TotalListResult<Gallery.ListResult>>): void;
    list(params: Gallery.ListParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.TotalListResult<Gallery.ListResult>>, onerror: Mailchimp.ErrorCallback): void;

    /** Return a list of the folders available to the file gallery. */
    listFolders(params: Gallery.ListFoldersParam): void;
    listFolders(params: Gallery.ListFoldersParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.TotalListResult<Gallery.ListFoldersResult>>): void;
    listFolders(params: Gallery.ListFoldersParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.TotalListResult<Gallery.ListFoldersResult>>, onerror: Mailchimp.ErrorCallback): void;

    /** Remove all files from a folder (Note that the files are not deleted, they are only removed from the folder). */
    removeAllFilesFromFolder(params: Gallery.FolderParam): void;
    removeAllFilesFromFolder(params: Gallery.FolderParam, onsuccess: Mailchimp.SuccessCallback<boolean>): void;
    removeAllFilesFromFolder(params: Gallery.FolderParam, onsuccess: Mailchimp.SuccessCallback<boolean>, onerror: Mailchimp.ErrorCallback): void;

    /** Remove a file from a folder. */
    removeFileFromFolder(params: Gallery.FolderFileParam): void;
    removeFileFromFolder(params: Gallery.FolderFileParam, onsuccess: Mailchimp.SuccessCallback<boolean>): void;
    removeFileFromFolder(params: Gallery.FolderFileParam, onsuccess: Mailchimp.SuccessCallback<boolean>, onerror: Mailchimp.ErrorCallback): void;

    /** Remove a folder. */
    removeFolder(params: Gallery.FolderParam): void;
    removeFolder(params: Gallery.FolderParam, onsuccess: Mailchimp.SuccessCallback<boolean>): void;
    removeFolder(params: Gallery.FolderParam, onsuccess: Mailchimp.SuccessCallback<boolean>, onerror: Mailchimp.ErrorCallback): void;
}
declare namespace Gallery {
    export interface FolderParam {
        folder_id: string;
    }
    export interface FolderFileParam {
        folder_id: number;
        file_id: number;
    }

    export interface FolderAddParam {
        name: string;
    }
    export interface FolderAddResult {
        "data.id": number;
    }

    export interface ListParam {
        opts?: {
            type?: string;
            start?: number;
            limit?: number;
            sort_by?: string;
            sort_dir?: string;
            search_term?: string;
            folder_id?: number;
        };
    }
    export interface ListResult {
        id: number;
        name: string;
        time: string;
        size: number;
        full: string;
        thumb: string;
    }

    export interface ListFoldersParam {
        opts?: {
            start?: number;
            limit?: number;
            search_term?: string;
        };
    }
    export interface ListFoldersResult {
        id: number;
        name: string;
        file_count: number;
    }
}

declare class Goal {
    master: Mailchimp;

    constructor(master: Mailchimp);

    /** Return a section of the image gallery. */
    events(params: Goal.EventsParam): void;
    events(params: Goal.EventsParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.TotalListResult<Goal.EventResult>>): void;
    events(params: Goal.EventsParam, onsuccess: Mailchimp.SuccessCallback<Mailchimp.TotalListResult<Goal.EventResult>>, onerror: Mailchimp.ErrorCallback): void;

    /** Get all email addresses that complained about a given campaign */
    recordEvent(params: Goal.RecordEventParam): void;
    recordEvent(params: Goal.RecordEventParam, onsuccess: Mailchimp.SuccessCallback<Goal.EventResult>): void;
    recordEvent(params: Goal.RecordEventParam, onsuccess: Mailchimp.SuccessCallback<Goal.EventResult>, onerror: Mailchimp.ErrorCallback): void;
}
declare namespace Goal {
    export interface EventsParam {
        list_id: string;
        email: Mailchimp.EmailIdentifier;
        start?: number;
        limit?: number;
    }
    export interface EventResult {
        event: string;
        last_visited_at: string;
    }

    export interface RecordEventParam {
        list_id: string;
        email: Mailchimp.EmailIdentifier;
        campaign_id: string;
        event: string;
    }
}

declare class Mobile {
    master: Mailchimp;

    constructor(master: Mailchimp);
}

declare class Neapolitan {
    master: Mailchimp;

    constructor(master: Mailchimp);
}
