
/**
 *
 * You can write your JS code here, DO NOT touch the default style file
 * because it will make it harder for you to update.
 *
 */

"use strict";


$(document).ready(function () {
    $('#example').DataTable();
});


 /*
    |------------------------------------------------------------------------------------------------------------------------------------------
    |   Update Status Ajax
    |------------------------------------------------------------------------------------------------------------------------------------------
    |
    */
    $(document.body).on('click', '.status_btn', function () {
        let status = $(this).attr('status');
        const id = $(this).attr('model_id');
        const model = $(this).attr('model');
        // const panel = $(this).attr('panel');

        console.log(status);
        console.log(id);
        console.log(model);

        status = status == 0 ? 1 : 0;
        // let url = (panel == 'admin')?'/admin/updateStatus':'/selleradmin/updateStatus';
        let url = '/admin/updateStatus';

        $.ajax({
            type: 'PUT',
            url: url,
            // headers: {
            //     'securitykey': securityKey,
            // },
            data: {
                id,
                model,
                status
            },
            beforeSend: () => {
                $(this).attr('disabled', 'true');
                $(this).prepend('<i class="fa fa-spinner fa-spin" style="margin-right: 7px;"></i>');
            },
            success: (response) => {
                console.log(response, '=============================>response');
                setTimeout(() => {
                    $(this).find('i').remove();
                    $(this).removeAttr('disabled');
                    $(this).attr('status', status);

                    if (status == 0) {
                        $(this).html('Inactive');
                        $(this).removeClass('btn-outline-success');
                        $(this).addClass('btn-outline-danger');
                    } else {
                        $(this).html('Active');
                        $(this).removeClass('btn-outline-danger');
                        $(this).addClass('btn-outline-success');
                    }

                    iziToast[response.success ? 'success' : 'error']({
                        title: response.message,
                        // message: '',
                        position: 'topRight'
                    });
                }, 500);
            }
        });
    });


    $(document.body).on('click', '.blk_btn', function () {
        let status = $(this).attr('status');
        const id = $(this).attr('model_id');
        const model = $(this).attr('model');
        // const panel = $(this).attr('panel');

        console.log(status);
        console.log(id);
        console.log(model);

        status = status == 0 ? 1 : 0;
        // let url = (panel == 'admin')?'/admin/updateStatus':'/selleradmin/updateStatus';
        let url = '/admin/blockUser';

        $.ajax({
            type: 'PUT',
            url: url,
            // headers: {
            //     'securitykey': securityKey,
            // },
            data: {
                id,
                model,
                status
            },
            beforeSend: () => {
                $(this).attr('disabled', 'true');
                $(this).prepend('<i class="fa fa-spinner fa-spin" style="margin-right: 7px;"></i>');
            },
            success: (response) => {
                console.log(response, '=============================>response');
                setTimeout(() => {
                    $(this).find('i').remove();
                    $(this).removeAttr('disabled');
                    $(this).attr('status', status);

                    if (status == 0) {
                        $(this).html('Inactive');
                        $(this).removeClass('btn-outline-success');
                        $(this).addClass('btn-outline-danger');
                    } else {
                        $(this).html('Active');
                        $(this).removeClass('btn-outline-danger');
                        $(this).addClass('btn-outline-success');
                    }

                    iziToast[response.success ? 'success' : 'error']({
                        title: response.message,
                        // message: '',
                        position: 'topRight'
                    });
                }, 500);
            }
        });
    });