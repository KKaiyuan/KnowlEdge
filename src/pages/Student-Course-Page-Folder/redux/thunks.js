// Code inpsired from Workshop 3's cs455-express-demo repo: https://github.com/svmah/cs455-express-demo/tree/add-server
import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from './actionTypes';
import ItemService from './service';

export const getAnnouncementsAsync = createAsyncThunk(
    actionTypes.GET_ANNOUNCEMENTS,
    async () => {
        return await ItemService.getAnnouncements();
    }
)